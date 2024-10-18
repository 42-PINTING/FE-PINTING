import React from 'react';
import Image from 'next/image';
import styles from '../_styles/diaryRecord.module.scss';

const DiaryRecord: React.FC = ({ dummyData }) => {
  return (
    <div className={styles.diaryRecordContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.recordTitle}>그림 일기 기록</span>
        <span className={styles.recordDate}>+{dummyData.recordDate}일 째</span>
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
            <span className={styles.dayStyle}>{dummyData.recordDay}</span>
            <span className={styles.marginDay}>일</span>
            <span>동안 꾸준히 썼어요!</span>
          </div>
          <div className={styles.bottonContour}></div>
          <div className={styles.recordDay}>
            <span className={styles.dayStyle2}>{dummyData.heartCount}</span>
            <span className={styles.marginDay}>개</span>
            <span>하트를 나눠주었어요!</span>
          </div>
          <div className={styles.bottonContour}></div>
          <div className={styles.recordDay}>
            <span className={styles.dayStyle3}>
              {dummyData.recordAttendance}
            </span>
            <span className={styles.marginDay}>일</span>
            <span>동안 꾸준히 출석했어요!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryRecord;
