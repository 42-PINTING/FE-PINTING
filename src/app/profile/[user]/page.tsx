'use client';

import Sidebar from '@/global/components/Sidebar';
import TopProfile from './_component/topProfile';
import styles from '../[user]/_styles/page.module.scss';
import { FiEdit2 } from 'react-icons/fi';
import Image from 'next/image';
import { FiSettings } from 'react-icons/fi';

const DUMMY_DATA = {
  nickname: 'jugwak',
  description: '자기소개 글입니다.',
  profileImage: 'dfsf',
  postCount: 10,
  follower: 1,
  following: 3,
  images: [
    '/_dummyData/1.png',
    '/_dummyData/2.png',
    '/_dummyData/3.png',
    '/_dummyData/4.png',
  ],
};

export default function ProfilePage() {
  return (
    <Sidebar>
      <TopProfile />
      <div className={styles.mainContainer}>
        <div>
          <div className={styles.nickname}>
            {DUMMY_DATA.nickname} <FiEdit2 className={styles.editImage} />
          </div>
          <div>{DUMMY_DATA.description}</div>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.followerContainer}>
            <Image
              src={'/_profileImage/profileImage.png'}
              width={100}
              height={100}
              alt={'profileImage'}
            />
            <div className={styles.countStyle}>
              <span className={styles.postCountStyle}>
                {DUMMY_DATA.postCount}
              </span>
              <span className={styles.textStyle}> 게시물</span>
            </div>
            <div className={styles.countStyle}>
              <span className={styles.postCountStyle}>
                {DUMMY_DATA.follower}
              </span>
              <span className={styles.textStyle}> 팔로워</span>
            </div>
            <div className={styles.countStyle}>
              <span className={styles.postCountStyle}>
                {DUMMY_DATA.following}
              </span>
              <span className={styles.textStyle}> 팔로잉</span>
            </div>
            <FiSettings />
          </div>
          <div className={styles.contour}></div>
          <div>
            <span className={styles.bottomTitle}>내가 업로드한 그림</span>
          </div>
          <div className={styles.postGird}>
            {DUMMY_DATA.images.map((post) => (
              <Image src={post} width={210} height={150} alt={'profileImage'} />
            ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
