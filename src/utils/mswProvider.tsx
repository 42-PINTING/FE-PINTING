'use client';

import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

export default function MswProvider({ children }: Props) {
  const [isInit, setIsInit] = useState<boolean>(false);

  const configMsw = async () => {
    // next dev를 이용하여 개발 환경에서 동작했을 때만 msw 동작
    const { worker } = await import('@/../public/api/browser');
    await worker.start();
  };

  // msw 초기화가 수행되지 않은 경우 msw 초기화 설정 수행
  // 해당 설정을 하지 않고 바로 msw가 사용되는 페이지에 접근할 경우 msw 설정이 되기 전 API가 호출되어 mocking이 올바르게 수행되지 않음
  useEffect(() => {
    if (!isInit) {
      (async () => {
        await configMsw();
        setIsInit(true);
      })();
    }
  }, [isInit]);

  if (process.env.NODE_ENV !== 'development') {
    return <>{children}</>;
  }

  // 해당 설정을 하지 않고 바로 msw가 사용되는 페이지에 접근할 경우 msw 설정이 되기 전 API가 호출되어 mocking이 올바르게 수행되지 않음
  if (!isInit) {
    return <>아직 msw 로딩중</>;
  }

  return <>{children}</>;
}
