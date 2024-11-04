'use client';

import Sidebar from '@/global/components/Sidebar';
import React from 'react';
import TopContainer from './_component/TopContainer';
import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { detailPageState } from '../../../global/atoms/profile';
import styles from './_styles/page.module.scss';
import Image from 'next/image';

const postDetail: React.FC = () => {
  const router = useRouter();

  const detailData = useRecoilValue(detailPageState);

  return (
    <Sidebar>
      <TopContainer />
      <div className={styles.mainContainer}>
        <div className={styles.rightContainer}>
          {/* <span className={styles.detailTitle}>{detailData.title}</span> */}
          <span className={styles.detailTitle}>첫 번째 데모 이미지</span>
          {/* <span>{detailData.time}</span> */}
          <div className={styles.rightMiddleContainer}>
            <span className={styles.timeText}>2024.11.23</span>
            <div className={styles.hashTagText}>상쾌해</div>
          </div>
          <Image
            src={detailData.image}
            className={styles.responsiveImage}
            width={400}
            height={300}
            layout='responsive'
            alt={detailData.title}
          />
          <div className={styles.buttonContainer}>
            <button className={styles.imageFixButton}>그림 수정</button>
          </div>
        </div>
        <div className={styles.leftContainer}>
          <div>
            <span className={styles.commentText}>
              Content_내용_여행가며 보았던 스페인의 산티아고 순례길을 걸으며
              만난 작은 양귀비 꽃을 그린거야. 그 옆에 작고 하얀 돌담으로 지어진
              작은 집이 아직도 생각나 Content_내용_여행가며 보았던 스페인의
              산티아고 순례길을 걸으며 만난 작은 양귀비 꽃을 그린거야
              Content_내용_여행가며 보았던 스페인.....
            </span>
            <div>
              <div className={styles.hashTagContainer}>
                <span className={styles.hashTagText2}>{detailData.hashTag}</span>
                <Image
                  src={'/detailImage/apple.png'}
                  width={30}
                  height={30}
                  alt={'apple'}
                />
              </div>
              <div className={styles.line}></div>
            </div>
          </div>
          <div className={styles.leftButtonContainer}>
            <button className={styles.leftButton}>수정</button>
            <button className={styles.leftButton}>삭제</button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default postDetail;
