const titleColor = [
  '#669CED',
  '#FF9141',
  '#F7B262',
  '#65B141',
  '#7FC04D',
  '#FF7272',
  '#9EA1F2',
];

function basic() {
  const title = 'PINTING';

  return (
    <>
      {title.split('').map((char, index) => (
        <span key={char + index} style={{ color: titleColor[index] }}>
          {char}
        </span>
      ))}
    </>
  );
}

const Title = {
  basic,
};

export default Title;
