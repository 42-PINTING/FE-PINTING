'use client';

import Link from 'next/link';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { profileState } from '@/_globalAtoms/profile';
import styles from '@/_globalStyles/SignInButton.module.scss';

//================SignButton================
export const SignButton = () => {
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

//================SelectButton================
type SelectButtonProps = {
  defaultValue: string;
  selectButtonItems: { value: string; text: string }[];
};

export const SelectButton = ({
  defaultValue,
  selectButtonItems,
}: SelectButtonProps) => {
  return (
    <select aria-label='Select Button' className={styles.selectButton}>
      <option>{defaultValue}</option>
      {selectButtonItems.map((item) => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
};
