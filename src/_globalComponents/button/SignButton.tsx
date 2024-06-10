'use client';

import Link from 'next/link';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { profileState } from '@/_globalAtoms/profile';
import styles from '@/_globalStyles/SignInButton.module.scss';

const SignButton = () => {
  const profile = useRecoilValue(profileState);
  const resetProfile = useResetRecoilState(profileState);

  if (!profile.email) {
    return (
      <Link href='/signIn' className={styles.signIn}>
        로그인
      </Link>
    );
  }

  return <button onClick={resetProfile}>로그아웃</button>;
};

export default SignButton;
