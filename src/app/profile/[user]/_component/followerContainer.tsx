'use client';

import React from 'react';
import Image from 'next/image';
import { FiSettings } from 'react-icons/fi';
import styles from '../_styles/followerContainer.module.scss';

const FollowerContainer: React.FC = ({ dummyData }) => {
  return (
    <div className={styles.followerContainer}>
      <Image
        src={'/_profileImage/profileImage.png'}
        width={100}
        height={100}
        alt={'profileImage'}
      />
      <div className={styles.countStyle}>
        <span className={styles.postCountStyle}>{dummyData.postCount}</span>
        <span> 게시물</span>
      </div>
      <div className={styles.countStyle}>
        <span className={styles.postCountStyle}>{dummyData.follower}</span>
        <span> 팔로워</span>
      </div>
      <div className={styles.countStyle}>
        <span className={styles.postCountStyle}>{dummyData.following}</span>
        <span> 팔로잉</span>
      </div>
      <FiSettings />
    </div>
  );
};

export default FollowerContainer;
