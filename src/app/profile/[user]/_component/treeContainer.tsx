'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../_styles/treeContainer.module.scss';

const TreeContainer: React.FC = ({ dummyData }) => {
  return (
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
          <span className={styles.orangeText}>{dummyData.likeCount}</span>
          <Image
            src={'/_profileImage/Frame 204.png'}
            width={22}
            height={24}
            alt={'apple'}
          />
        </div>
        <button className={styles.orangeButton}>오랜지나무 확인하기</button>
      </div>
    </div>
  );
};

export default TreeContainer;
