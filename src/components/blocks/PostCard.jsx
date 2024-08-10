import React from 'react';

const PostCard = ({ title, description, image }) => {
  return (
    <div className="p-2 border rounded shadow-sm">
      <div className="mb-3">
        <img
          src={image}
          alt={title}
          className="aspect-video object-cover rounded"
        />
      </div>
      <div>
        <h3 className="text-slate-950 text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 text-clip">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
