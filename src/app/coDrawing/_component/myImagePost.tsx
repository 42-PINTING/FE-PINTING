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
      <Image className={styles.image} src={post.image} />
      <div className={styles.timeText}>{post.time}</div>
      <div className={styles.titleText}>{post.title}</div>
      <div className={styles.hashTag}>{post.hashTag}</div>
    </div>
  );
};

export default PostItem;
