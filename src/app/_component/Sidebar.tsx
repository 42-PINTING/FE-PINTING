import Link from 'next/link';
import styles from '../_styles/Sidebar.module.scss';
import Title from '../../globalComponent/Titile';
import { FaGithub } from 'react-icons/fa';
import { BsEnvelopePaperHeart } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

/**
 * 그리기 == 개인 그림
 * 그림편지 == 게시판
 */
const navPersonalItems = [
  { href: '/painting', text: '그리기', icon: <FaPen /> },
  { href: '/', text: '그림 편지', icon: <BsEnvelopePaperHeart /> },
];

const navCoItems = [
  { href: '/coDrawing', text: '공유 그림', icon: <FaUser /> },
];

const navPrivateItems = [{ href: '/user', text: '유저', icon: <FaUser /> }];

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>
        <Title.basic />
      </h2>
      <ul className={styles.sidebarList}>
        <PersonalItems />
        <hr className={styles.line} />
        <CoItems />
        <hr className={styles.line} />
        <PrivateItems />
      </ul>
      <FooterItems />
    </nav>
  );
}

function PersonalItems() {
  return navPersonalItems.map((item) => (
    <li key={item.href} className={styles.sidebarItem}>
      <Link href={item.href} className={styles.sidebarLink}>
        <div className={styles.itemIcon}>{item.icon}</div>
        <div className={styles.itemText}>{item.text}</div>
      </Link>
    </li>
  ));
}

function CoItems() {
  return navCoItems.map((item) => (
    <li key={item.href} className={styles.sidebarItem}>
      <Link href={item.href} className={styles.sidebarLink}>
        <div className={styles.itemIcon}>{item.icon}</div>
        <div className={styles.itemText}>{item.text}</div>
      </Link>
    </li>
  ));
}

function PrivateItems() {
  return navPrivateItems.map((item) => (
    <li key={item.href} className={styles.sidebarItem}>
      <Link href={item.href} className={styles.sidebarLink}>
        <div className={styles.itemIcon}>{item.icon}</div>
        <div className={styles.itemText}>{item.text}</div>
      </Link>
    </li>
  ));
}

function FooterItems() {
  return (
    <Link href='https://github.com/42-PINTING' className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <FaGithub />
        </div>
        <div className={styles.copyright}>copyright</div>
        <div className={styles.copyright}>reserved</div>
      </footer>
    </Link>
  );
}
