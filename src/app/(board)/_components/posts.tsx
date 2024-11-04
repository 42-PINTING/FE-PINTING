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
      <li>멋지게 만들어주세요요요오오</li>
      <li>Post2</li>
      <li>Post3</li>
    </ul>
  );
};

export default PostList;
