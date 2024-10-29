'use client';

import Sidebar from '@/global/components/Sidebar';
import React from 'react';
import TopContainer from '../_component/topContainer';
import { useRouter } from 'next/navigation';

const postDetail: React.FC = () => {
  const router = useRouter();
  const { query } = router;

  if (!query.title) {
    return <div>...Loading</div>;
  }

  return (
    <Sidebar>
      <TopContainer />
      <div>
        <div>{query.title}</div>
        <div>{query.time}</div>
      </div>
    </Sidebar>
  );
};

export default postDetail;
