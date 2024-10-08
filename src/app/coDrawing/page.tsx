import Sidebar from '@/global/components/Sidebar';
import TopContainer from './_component/topContainer';
import styles from '../coDrawing/_styles/page.module.scss';
import PostGrid from './_component/postGrid';
import Link from 'next/link';

export default function coDrawing() {
  //   const router = useRouter();

  //   function drawingButtonHandler() {
  //     router.push('/painting');
  //   }

  return (
    <Sidebar>
      <div>
        <TopContainer />
        <div className={styles.imageContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.myImageTitle}>내 그림</div>
            <Link href='/painting' className={styles.drawingButton}>
              + 그림 그리기
            </Link>
          </div>
          <div className={styles.postContainer}>
            <PostGrid />
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
