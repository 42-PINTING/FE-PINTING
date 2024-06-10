'use client';

import { profileState } from '@/_globalAtoms/profile';
import { useSetRecoilState } from 'recoil';
import { FC } from 'react';
import { instance } from '@/utils/axios';

type useSetProfileProps = {
  children: React.ReactNode;
};

const SetProfile: FC<useSetProfileProps> = ({ children }) => {
  const setProfile = useSetRecoilState(profileState);

  const getProfile = async () => {
    await instance
      .post(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/me`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        // TODO: 에러 처리
        console.log(err);
      });
  };

  getProfile();

  return <>{children}</>;
};

export default SetProfile;
