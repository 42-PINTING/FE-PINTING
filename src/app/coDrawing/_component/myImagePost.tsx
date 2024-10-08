import React from 'react';
import { Post } from '../_dummyImage/dataType';
import Image from 'next/image';
import styles from '../_styles/myImagePost.module.scss';

type PostItemProps = {
  post: Post;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      <Image
        className={styles.image}
        src={post.image}
        width={400} // 원하는 너비
        height={300} // 원하는 높이
        alt={post.title}
      />
      <div className={styles.timeText}>{post.time}</div>
      <div className={styles.titleText}>{post.title}</div>
      <div className={styles.hashTag}>{post.hashTag}</div>
    </div>
  );
};

export default PostItem;
