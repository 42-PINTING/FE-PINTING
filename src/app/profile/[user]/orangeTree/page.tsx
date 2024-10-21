'use client';

import TopContainer from '../_component/topProfile';
import Sidebar from '@/global/components/Sidebar';
import React from 'react';
import Link from '../../../../../node_modules/next/link';
import styles from './_styles/page.module.scss';
import Image from 'next/image';

export default function OrangeTree() {
  const DUMMY_DATA = {
    growth: 12,
  };

  return (
    <Sidebar>
      <TopContainer />
      <div className={styles.mainContainer}>
        <div className={styles.orangeTreeTitle}>QnA 오렌지 나무가 뭔가요?</div>
        <Link href='/coDrawing' className={styles.backCoDrawing}>
          내 그림으로 돌아가기
        </Link>
        <div className={styles.mainBox}>
          <div className={styles.treeContainer}>
            <Image
              className={styles.imageStyle}
              src='/treeImg/Level1.png'
              width={30}
              height={50}
              alt={'tree'}
            />
            <Image
              className={styles.imageStyle}
              src='/treeImg/Level2.png'
              width={100}
              height={120}
              alt={'tree'}
            />
            <Image
              className={styles.imageStyle}
              src='/treeImg/Level3.png'
              width={100}
              height={120}
              alt={'tree'}
            />
            <Image
              className={styles.imageStyle}
              src='/treeImg/Level4.png'
              width={100}
              height={120}
              alt={'tree'}
            />
            <Image
              className={styles.imageStyle}
              src='/treeImg/Level5.png'
              width={100}
              height={120}
              alt={'tree'}
            />
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
