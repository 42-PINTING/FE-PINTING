import Image from 'next/image';
import styles from '../_styles/Oauth.module.scss';
import Link from 'next/link';

// TODO: api로 Outh 구현
function Google() {
  const serverLoginEndpoint =
    process.env.NEXT_PUBLIC_SERVER_ENDPOINT + '/oauth2/authorization/google';
  return (
    <button className={styles.oauthBtn}>
      <Link href={serverLoginEndpoint}>
        <Image
          alt='google sign in button'
          src='/img/googleSignInButton.svg'
          width={100}
          height={25}
        ></Image>
      </Link>
    </button>
  );
}

function Kakao() {
  return (
    <button className={styles.oauthBtn}>
      <Image
        alt='kakao sign in button'
        src='/img/kakaoButton.png'
        width={100}
        height={25}
      ></Image>
    </button>
  );
}

const Oauth = { Google, Kakao };

export default Oauth;
