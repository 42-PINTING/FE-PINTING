import styles from '../_styles/topContainer.module.scss';
import { FiSearch, FiLogIn } from 'react-icons/fi';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { detailPageState } from '../../../../global/atoms/profile';

const titleColor = [
  '#669CED',
  '#FF9141',
  '#F7B262',
  '#65B141',
  '#7FC04D',
  '#FF7272',
  '#9EA1F2',
];

function TopContainer() {
  const title = 'PINTING';
  const detailData = useRecoilValue(detailPageState);

  return (
    <div className={styles.topContainer}>
      <div className={styles.buttonContainer}>
        <span className={styles.titleText}> <span className={styles.myImageText}>내 그림</span> > {detailData.id} </span>
      </div>
      <div className={styles.loginContainer}>
        <FiLogIn className={styles.fiLogin} />
        <button className={styles.loginButton}>
          <div className={styles.loginText}>구글 로그인</div>
        </button>
      </div>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <h3 className={styles.LogoStyle}>
          {title.split('').map((char, index) => (
            <span
              key={char + index}
              style={{ color: titleColor[index], textDecoration: 'none' }}
            >
              {char}
            </span>
          ))}
        </h3>
      </Link>
    </div>
  );
}

export default TopContainer;
