'use client';

import { RecoilRoot } from 'recoil';
import { FC } from 'react';

type RecoilRootProviderProps = {
  children: React.ReactNode;
};

const RecoilRootProvider: FC<RecoilRootProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootProvider;
