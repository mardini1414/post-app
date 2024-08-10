import React from 'react';
import PostCardSkeleton from './PostCardSkeleton';

const PostListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
        return <PostCardSkeleton key={value} />;
      })}
    </div>
  );
};

export default PostListSkeleton;
