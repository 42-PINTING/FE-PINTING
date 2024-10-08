import React from 'react';
import { DUMMY_DATA } from '../_dummyImage/dummyData';
import PostItem from '../_component/myImagePost';
import { GetServerSideProps } from 'next';

const PostGrid: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '63px',
      }}
    >
      {DUMMY_DATA.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;

// 나중에 API완성되면 해보기
// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch(API_URL);
//   const posts: Post[] = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
