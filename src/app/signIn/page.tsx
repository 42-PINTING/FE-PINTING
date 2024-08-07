'use client';
import Image from 'next/image';
import SignForm from './_component/SignForm';
import Oauth from './_component/Oauth';
import styles from './_styles/signIn.module.scss';

export default function SignIn() {
  return (
    <div className={styles.signInPanel}>
     
    <div className={styles.signInLayout}>
      <div className={styles.titleLoginBox}>
        <h1 className={styles.signInTitle}>Pinting</h1>
        <SignForm />
        <div className={styles.oauthBtnGroup}>
          <Oauth.Google />
          <Oauth.Kakao />
        </div>
      </div>
      <Image
        className={styles.randomUserImage}
        src='/img/test.svg'
        alt='random pinting user image'
        width={500}
        height={500}
      />
       <div className={styles.radiusPanel}>
    </div>
   
    </div>
    </div>
  );
}
