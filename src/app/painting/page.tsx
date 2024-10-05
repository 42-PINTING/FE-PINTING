import WhiteBoard from './_component/whiteBoard';
import Sidebar from '@/global/components/Sidebar';
import styles from './_styles/whiteBoard.module.scss';

export default function Painting() {
  return (
    <div className={styles.paperBackground}>
      <Sidebar>
        <div></div>
        <WhiteBoard />
      </Sidebar>
    </div>
  );
}
