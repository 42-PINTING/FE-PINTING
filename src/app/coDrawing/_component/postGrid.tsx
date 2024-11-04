'use client';

import React from 'react';
import { DUMMY_DATA } from '../_dummyImage/dummyData';
import PostItem from '../_component/myImagePost';
import styles from '../_styles/postGrid.module.scss';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { detailPageState } from '../../../global/atoms/profile';

const PostGrid: React.FC = () => {
  const router = useRouter();
  const setDetailPageState = useSetRecoilState(detailPageState);

  const onPostButtonHandler = (post: any) => {
    setDetailPageState({
      id: post.id,
      title: post.title,
      image: post.image,
      time: post.time,
      hashTag: post.hashTag,
    });

    router.push(`/coDrawing/${post.id}`);
  };

  return (
    <div className={styles.postGird}>
      {DUMMY_DATA.map((post) => (
        <button
          className={styles.postButton}
          onClick={() => onPostButtonHandler(post)}
        >
          <PostItem key={post.id} post={post} />
        </button>
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
