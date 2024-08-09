import Link from 'next/link';
import styles from '@/global/styles/Tilte.module.scss';

const titleColor = [
  '#669CED',
  '#FF9141',
  '#F7B262',
  '#65B141',
  '#7FC04D',
  '#FF7272',
  '#9EA1F2',
];

const basic = () => {
  const title = 'Pinting';

  return (
    <Link href='/' className={styles.TitleLink}>
      <h3>
        {title.split('').map((char, index) => (
          <span key={char + index} style={{ color: titleColor[index] }}>
            {char}
          </span>
        ))}
      </h3>
    </Link>
  );
};

const Title = {
  basic,
};

export default Title;
