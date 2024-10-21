'use client';

import Sidebar from '@/global/components/Sidebar';
import TopProfile from './_component/topProfile';
import styles from '../[user]/_styles/page.module.scss';
import { FiEdit2 } from 'react-icons/fi';
import Image from 'next/image';
import FollowerContainer from './_component/followerContainer';
import TreeContainer from './_component/treeContainer';
import DiaryRecord from './_component/diaryRecord';

const DUMMY_DATA = {
  nickname: 'jugwak', //본인 닉네임
  description: '자기소개 글입니다.', //자기소개글
  profileImage: 'dfsf', //이미지 URL
  postCount: 10, //게시물 갯수
  follower: 1, //팔로워
  following: 3, //팔로잉
  images: [
    //본인 계시물
    '/_dummyData/1.png',
    '/_dummyData/2.png',
    '/_dummyData/3.png',
    '/_dummyData/4.png',
  ],
  recordDate: 32, //출석일수
  recordDay: 12, //연속 게시일수
  heartCount: 20, //하트갯수
  recordAttendance: 10, //꾸준히 출석한 일수
  likeCount: 40, //좋아요 갯수
};

export default function ProfilePage() {
  return (
    <Sidebar>
      <TopProfile />
      <div className={styles.holeContainer}>
        <div className={styles.mainContainer}>
          <div>
            <div className={styles.nickname}>
              {DUMMY_DATA.nickname} <FiEdit2 className={styles.editImage} />
            </div>
            <div>{DUMMY_DATA.description}</div>
          </div>
          <div className={styles.profileContainer}>
            <FollowerContainer dummyData={DUMMY_DATA} />
            <div className={styles.contour}></div>
            <div>
              <span className={styles.bottomTitle}>내가 업로드한 그림</span>
            </div>
            <div className={styles.postGird}>
              {DUMMY_DATA.images.map((post) => (
                <Image
                  src={post}
                  width={210}
                  height={150}
                  alt={'profileImage'}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <DiaryRecord dummyData={DUMMY_DATA} />
          <TreeContainer dummyData={DUMMY_DATA} />
        </div>
      </div>
    </Sidebar>
  );
}
