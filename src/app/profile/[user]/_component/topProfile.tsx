import styles from '../_styles/topProfile.module.scss';
import { FiSearch, FiLogIn } from 'react-icons/fi';
import Link from 'next/link';
import React from 'react';

const titleColor = [
  '#669CED',
  '#FF9141',
  '#F7B262',
  '#65B141',
  '#7FC04D',
  '#FF7272',
  '#9EA1F2',
];

const topProfile: React.FC = () => {
  const title = 'Pinting';

  return (
    <div className={styles.topContainer}>
      <div className={styles.searchArea}></div>
      <div className={styles.loginContainer}>
        <FiLogIn className={styles.fiLogin} />
        <button className={styles.loginButton}>
          <div className={styles.loginText}>로그 아웃</div>
        </button>
      </div>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <h3 className={styles.LogoStyle}>
          {title.split('').map((char, index) => (
            <span
              key={char + index}
              style={{ color: titleColor[index], textDecoration: 'none' }}
            >
              {char}
            </span>
          ))}
        </h3>
      </Link>
    </div>
  );
};

export default topProfile;
