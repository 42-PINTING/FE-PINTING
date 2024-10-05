import { instance } from '@/global/utils/axios';
// api 정하고 호출하기
const PostList = () => {
  instance
    .post('/board')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <ul>
      <li>Pos444444444444</li>
      <li>Post2</li>
      <li>Post3</li>
    </ul>
  );
};

export default PostList;
