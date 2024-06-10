'use client';

import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

/*
  mswProvider는 개발환경에서만 사용되는 컴포넌트
  lazy import를 사용하지 못한 이유는 lazy import가 server에서 사용되기 때문
  따라서 동적 import로 msw를 사용.
*/
export default function MswProvider({ children }: Props) {
  const [isInit, setIsInit] = useState<boolean>(false);

  const configMsw = async () => {
    const { worker } = await import('@/mocks/browser');
    await worker.start();

    setIsInit(true);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && !isInit) configMsw();
  }, [isInit]);

  if (process.env.NODE_ENV !== 'development' || isInit) {
    return <>{children}</>;
  }

  return <>아직 msw 로딩중</>;
}
