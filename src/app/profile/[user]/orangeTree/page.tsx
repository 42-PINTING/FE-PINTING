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
          <div className={styles.rightContainer}>
            <div className={styles.treeContainer}>
              <Image
                className={styles.imageStyle}
                src='/treeImg/Level1.png'
                width={30}
                height={50}
                alt={'tree'}
              />
              <Image
                //   className={styles.imageStyle}
                src='/treeImg/Level2.png'
                width={100}
                height={120}
                alt={'tree'}
              />
              <Image
                //   className={styles.imageStyle}
                src='/treeImg/Level3.png'
                width={100}
                height={120}
                alt={'tree'}
              />
              <Image
                //   className={styles.imageStyle}
                src='/treeImg/Level4.png'
                width={100}
                height={120}
                alt={'tree'}
              />
              <Image
                //   className={styles.imageStyle}
                src='/treeImg/Level5.png'
                width={100}
                height={120}
                alt={'tree'}
              />
            </div>
            <div className={styles.textContainer}>
              <span>0~25</span>
              <span>26~50</span>
              <span>51~75</span>
              <span>76~100</span>
              <span className={styles.plusText}>100+</span>
            </div>
            <div className={styles.description}>
              <span>
                오렌지를 나눠주며 꾸준히 통해 오렌지 나무를 키워주세요!
              </span>
              <span>
                서로 소중한 관심을 주고 받으면 내 감정을 솔직하게 표현하는데
                도움이 된다고 해요.
              </span>
            </div>
          </div>
          <div className={styles.contour}></div>
          <div className={styles.leftContainer}>
            <span className={styles.myGrowth}>내 성장 상태</span>
            <div className={styles.contentContainer}>
              <Image
                className={styles.myTreeImage}
                src='/treeImg/Level2.png'
                width={100}
                height={150}
                alt='tree'
              />
              <span>떡잎</span>
              <span>{DUMMY_DATA.growth}개</span>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
