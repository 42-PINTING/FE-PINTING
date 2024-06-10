import Sidebar from '@/_globalComponents/Sidebar';
import SignButton from '@/_globalComponents/button/SignButton';
import styles from './_styles/board.module.scss';
import { FaSearch } from 'react-icons/fa';

//TODO: selectButtonItems를 서버에서 받아오도록 수정
const selectButtonItems = [
  { value: '1', text: 'One' },
  { value: '2', text: 'Two' },
  { value: '3', text: 'Three' },
];

export default function app() {
  return (
    <Sidebar>
      <div className={styles.accountMenu}>
        <SignButton />
      </div>
      <div className={styles.header}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.boardTilte}>게시판</h2>
          <hr className={styles.verticalLine} />
          <h3 className={styles.paintType}>전체</h3>
          {/* TODO: 게시글 검색 기능 구현*/}
          <div className={styles.searchBox}>
            <FaSearch />
            {/* TODO : onChange 했을 때 일어나는 기능 구현 // onChange 이벤트가 없어서 에러남 */}
            {/* <input value={'검색'}></input> */}
          </div>
        </div>
        <SelectButton />
      </div>
    </Sidebar>
  );
}

function SelectButton() {
  return (
    <select aria-label='Select Button' className={styles.selectButton}>
      <option>그림종류</option>
      {selectButtonItems.map((item) => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
}
