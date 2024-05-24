import styles from '../_styles/signIn.module.scss';
import Image from 'next/image';
import SignForm from './_component/SignForm';
import Oauth from './_component/Oauth';

export default function SignIn() {
  return (
    <div className={styles.signInLayout}>
      <div className={styles.titleLoginBox}>
        <h1 className={styles.signInTitle}>PINTING</h1>
        <SignForm />
        <div className={styles.oauthBtnGroup}>
          <Oauth.Google />
          <Oauth.Kakao />
        </div>
      </div>
      <Image
        className={styles.randomUserImage}
        src='/next.svg'
        alt='random pinting user image'
        width={500}
        height={500}
      />
    </div>
  );
}
