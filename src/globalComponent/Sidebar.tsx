import Link from 'next/link';
import styles from '../globalStyles/Sidebar.module.scss';
import Title from './Titile';
import { FaGithub, FaHeart, FaPen, FaUser, FaSlideshare } from 'react-icons/fa';
import { BsEnvelopePaperHeart } from 'react-icons/bs';
import { LuTreeDeciduous } from 'react-icons/lu';

/**
 * 그리기 == 개인 그림
 * 그림편지 == 게시판
 */
const navPersonalItems = [
  { href: '/painting', text: '그리기', icon: <FaPen /> },
  {
    href: '/',
    text: '그림 편지',
    icon: <BsEnvelopePaperHeart color='orange' />,
  },
];

const navCoItems = [
  {
    href: '/coDrawing',
    text: '공유 그림',
    icon: <FaSlideshare color='#008000' />,
  },
];

const navPrivateItems = [
  { href: '/user', text: '유저', icon: <FaUser color='gray' /> },
];

export default function Sidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: 'flex' }}>
      <nav className={styles.nav} id='sidebar'>
        <h2 className={styles.title}>
          <Title.basic />
        </h2>
        <ul className={styles.list}>
          <PersonalItems />
          <hr className={styles.line} />
          <CoItems />
          <hr className={styles.line} />
          <PrivateItems />
          <AttendanceBox />
        </ul>
        <FooterItems />
      </nav>
      {children}
    </div>
  );
}

function PersonalItems() {
  return navPersonalItems.map((item) => (
    <li key={item.href} className={styles.item} id={`${item.text}`}>
      <Link href={item.href} className={styles.link}>
        <div className={styles.itemIcon}>{item.icon}</div>
        <div className={styles.itemText}>{item.text}</div>
      </Link>
    </li>
  ));
}

function CoItems() {
  return navCoItems.map((item) => (
    <li key={item.href} className={styles.item}>
      <Link href={item.href} className={styles.link}>
        <div className={styles.itemIcon}>{item.icon}</div>
        <div className={styles.itemText}>{item.text}</div>
      </Link>
    </li>
  ));
}

function PrivateItems() {
  return navPrivateItems.map((item) => (
    <li key={item.href} className={styles.item}>
      <Link href={item.href} className={styles.link}>
        <div className={styles.itemIcon}>{item.icon}</div>
        <div className={styles.itemText}>{item.text}</div>
      </Link>
    </li>
  ));
}

function AttendanceBox() {
  return (
    <div className={styles.attendanceBox}>
      <div>출석체크</div>
      <div>
        <LuTreeDeciduous color='#008000' />
      </div>
      <div>
        <FaHeart color='red' />
      </div>
    </div>
  );
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
