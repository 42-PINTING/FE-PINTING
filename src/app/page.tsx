import Image from 'next/image';
import Sign from './_component/Sign';

import styles from './_styles/Home.module.scss';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { server } from '../mocks/node.js';
import { instance } from '@/utils/axios';
import Oauth from './_component/Oauth';

server.listen();

//TODO: server side Props 만들기

// type Main = {
//   page: string;
//   isError: boolean;
// };

// export const getServerSideProps = (async () => {
//   let page;
//   let isError;

//   await instance
//     .get(`${process.env.NEXT_PUBLIC_SERVER_LOGIN_ENDPOINT}`)
//     .then((res) => {
//       page = res.data;
//       isError = false;
//     })
//     .catch((err) => {
//       page = err;
//       isError = true;
//     });

//   return { props: { page, isError } };
// }) satisfies GetServerSideProps<{ main: Main }>;

export default function main() {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.titleLoginBox}>
        <h1 className={styles.homeTitle}>PINTING</h1>
        <Sign />
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
