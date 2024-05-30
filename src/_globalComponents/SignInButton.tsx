'use client';

import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { signInState } from '@/_globalAtoms/signIn';

export default function SignInButton() {
  const [isPintingSignIn, setIsPintingSignIn] = useRecoilState(signInState);

  if (!isPintingSignIn) {
    return <Link href='/signIn'>로그인</Link>;
  }

  const handleLogout = () => {
    setIsPintingSignIn(false);
  };

  return <button onClick={handleLogout}>로그아웃</button>;
}
