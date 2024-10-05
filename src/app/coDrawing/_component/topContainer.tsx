import styles from '../_styles/topContainer.module.scss';
import { FiSearch, FiLogIn } from 'react-icons/fi';

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

  return (
    <div className={styles.topContainer}>
      <div className={styles.buttonContainer}>
        <button className={styles.searchButton}>
          <FiSearch className={styles.fiSearch} />
        </button>
        <textarea className={styles.searchArea} placeholder='검색'></textarea>
      </div>
      <div className={styles.loginContainer}>
        <FiLogIn className={styles.fiLogin} />
        <button className={styles.loginButton}>
          <div className={styles.loginText}>구글 로그인</div>
        </button>
      </div>
      <div>
        <h3 className={styles.LogoStyle}>
          {title.split('').map((char, index) => (
            <span key={char + index} style={{ color: titleColor[index] }}>
              {char}
            </span>
          ))}
        </h3>
      </div>
    </div>
  );
}

export default TopContainer;
