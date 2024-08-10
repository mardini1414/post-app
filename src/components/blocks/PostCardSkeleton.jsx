import React from 'react';

const PostCardSkeleton = () => {
  return (
    <div className="p-2 border rounded shadow-sm">
      <div className="mb-3">
        <div className="aspect-video bg-slate-200 animate-pulse rounded"></div>
      </div>
      <div>
        <div className="h-4 bg-slate-200 animate-pulse rounded mb-4"></div>
        <div className="h-3 bg-slate-200 animate-pulse rounded mb-1"></div>
        <div className="h-3 bg-slate-200 animate-pulse rounded mb-1"></div>
        <div className="h-3 bg-slate-200 animate-pulse rounded mb-1"></div>
        <div className="h-3 bg-slate-200 animate-pulse rounded mb-1"></div>
        <div className="h-3 bg-slate-200 animate-pulse rounded mb-1"></div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;
