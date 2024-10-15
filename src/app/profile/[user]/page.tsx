'use client';

import Sidebar from '@/global/components/Sidebar';
import TopProfile from './_component/topProfile';
import styles from '../[user]/_styles/page.module.scss';
import { FiEdit2 } from 'react-icons/fi';
import Image from 'next/image';
import FollowerContainer from './_component/followerContainer';

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
  recordDate: 32,
  recordDay: 12,
  heartCount: 20,
  recordAttendance: 10,
  likeCount: 40,
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
          <div className={styles.diaryRecordContainer}>
            <div className={styles.titleContainer}>
              <span className={styles.recordTitle}>그림 일기 기록</span>
              <span className={styles.recordDate}>
                +{DUMMY_DATA.recordDate}일 째
              </span>
            </div>
            <div className={styles.recordBottom}>
              <Image
                src={'/_profileImage/Layer 2.svg'}
                width={70}
                height={100}
                alt='dummy'
              />
              <div className={styles.recordContainer}>
                <div className={styles.recordDay}>
                  <span className={styles.dayStyle}>
                    {DUMMY_DATA.recordDay}
                  </span>
                  <span className={styles.marginDay}>일</span>
                  <span>동안 꾸준히 썼어요!</span>
                </div>
                <div className={styles.bottonContour}></div>
                <div className={styles.recordDay}>
                  <span className={styles.dayStyle2}>
                    {DUMMY_DATA.heartCount}
                  </span>
                  <span className={styles.marginDay}>개</span>
                  <span>하트를 나눠주었어요!</span>
                </div>
                <div className={styles.bottonContour}></div>
                <div className={styles.recordDay}>
                  <span className={styles.dayStyle3}>
                    {DUMMY_DATA.recordAttendance}
                  </span>
                  <span className={styles.marginDay}>일</span>
                  <span>동안 꾸준히 출석했어요!</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.treeContainer}>
            <Image
              src={'/_profileImage/Group 10.png'}
              width={100}
              height={100}
              alt={'tree'}
            />
            <div className={styles.orangeContainer}>
              <span>꾸준한 좋아요로 오랜지 나무를 키워주세요!</span>
              <div>
                <span className={styles.orangeText}>
                  {DUMMY_DATA.likeCount}
                </span>
                <Image
                  src={'/_profileImage/Frame 204.png'}
                  width={22}
                  height={24}
                  alt={'apple'}
                />
              </div>
              <button className={styles.orangeButton}>
                오랜지나무 확인하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
