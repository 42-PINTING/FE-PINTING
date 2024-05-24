import Link from 'next/link';
import styles from '../_styles/Sidebar.module.scss';
import Title from '@/globalComponent/Titile';

/**
 * 그리기 == 개인 그림
 * 그림편지 == 게시판
 */
const navPersonalItems = [
  { href: '/painting', text: '그리기' },
  { href: '/', text: '그림 편지' },
  { href: '/user', text: '유저' },
];

const navCoItems = [{ href: '/coDrawing', text: '공유 그림' }];

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>
        <Link href='/' className={styles.sidebarLink}>
          <Title.basic />
        </Link>
      </h2>
      <ul className={styles.sidebarList}>
        {navPersonalItems.map((item) => (
          <li key={item.href} className={styles.sidebarItem}>
            <Link href={item.href} className={styles.sidebarLink}>
              {item.text}
            </Link>
          </li>
        ))}
        <hr />
        {navCoItems.map((item) => (
          <li key={item.href} className={styles.sidebarItem}>
            <Link href={item.href} className={styles.sidebarLink}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <footer className={styles.footer}>
        <div className={styles.copyright}>copyright</div>
        <div className={styles.copyright}>reserved</div>
      </footer>
    </nav>
  );
}
