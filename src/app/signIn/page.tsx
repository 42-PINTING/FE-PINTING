'use client';
import Image from 'next/image';
import Oauth from './_component/Oauth';
import styles from './_styles/signIn.module.scss';
import Title from '@/global/components/Titile';

export default function SignIn() {
  return (
    <div className={styles.signInLayout}>
      <div className={styles.titleLoginBox}>
        <Title.basic />
        <div className={styles.oauthBtnGroup}>
          <Oauth.Google />
        </div>
      </div>
      <Image
        className={styles.randomUserImage}
        src='/img/test.jpg'
        alt='random pinting user image'
        width={500}
        height={500}
      />
    </div>
  );
}
