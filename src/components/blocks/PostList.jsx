import React from 'react';
import PostCard from './PostCard';
import { Inbox } from 'lucide-react';

const PostList = ({ data }) => {
  return (
    <>
      {!!data && data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-4">
          {data.map((post) => {
            return (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-[400px] flex flex-col justify-center items-center">
          <div className="mb-3">
            <Inbox size={50} className="text-gray-500" />
          </div>
          <span className="text-gray-500 text-sm">Post is empty!</span>
        </div>
      )}
    </>
  );
};

export default PostList;
