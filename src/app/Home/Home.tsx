import Image from 'next/image';
import Sign from './_component/Sign';
import styles from './_styles/Home.module.scss';

export default function Home() {
  // const googoleOauthRedirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL; // TODO: BE에서 받을 것
  // const googleOauthSecret = process.env.NEXT_PUBLIC_GOOGLE_SECRET;
  // const googleOauthClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  // const googleOauthState = process.env.NEXT_PUBLIC_GOOGLE_STATE;

  return (
    <div className={styles.homeLayout}>
      <div className={styles.leftLogicBox}>
        <h1 className={styles.homeTitle}>PINTING</h1>
        <Sign />
        <div className={styles.oauthBtnGroup}>
          <button className={styles.oauthBtn} type='button'>
            Oauth google
          </button>
          <button className={styles.oauthBtn} type='button'>
            Oauth kakao
          </button>
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
