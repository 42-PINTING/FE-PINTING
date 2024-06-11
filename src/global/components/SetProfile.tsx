'use client';

import { profileState } from '@/global/atoms/profile';
import { useSetRecoilState } from 'recoil';
import { FC } from 'react';
import { instance } from '@/global/utils/axios';

type useSetProfileProps = {
  children: React.ReactNode;
};

const SetProfile: FC<useSetProfileProps> = ({ children }) => {
  const setProfile = useSetRecoilState(profileState);

  const getProfile = async () => {
    await instance
      .post(`/me`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        // TODO: permission 에러 처리
        console.log(err);
      });
  };

  getProfile();

  return <>{children}</>;
};

export default SetProfile;
