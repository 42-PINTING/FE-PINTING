import Sidebar from '@/global/components/Sidebar';
import TopContainer from './_component/topContainer';
import styles from '../coDrawing/_styles/page.module.scss';
import PostGrid from './_component/postGrid';

export default function coDrawing() {
  return (
    <Sidebar>
      <div>
        <TopContainer />
        <div className={styles.imageContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.myImageTitle}>내 그림</div>
            <button className={styles.drawingButton}>+ 그림 그리기</button>
          </div>
          <div className={styles.postContainer}>
            <PostGrid />
            {/* {DUMMY_DATA.map((data, index) => (
              <MyImagePost key={index} data={data} />
            ))} */}
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
