export type Post = {
  id: number; //게시물의 id
  image: string; //이미지 object
  title: string; //게시물 제목
  time: string; //작성한 시간
  hashTag: string; //해시태그로 넘어올 내용
};

//백엔드가 어떻게 넘겨주느냐에 따라 다르게 될듯함.
