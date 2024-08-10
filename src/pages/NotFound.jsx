import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h2 className="text-center text-6xl md:text-8xl text-gray-500 mb-4">
          404
        </h2>
        <span className="text-center block text-gray-500">page not found</span>
      </div>
    </div>
  );
};

export default NotFound;
