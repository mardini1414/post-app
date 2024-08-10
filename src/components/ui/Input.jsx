import React from 'react';

const Input = ({ icon, iconPosition = 'left', ...props }) => {
  return (
    <div className="relative w-full">
      {icon && iconPosition === 'left' && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        {...props}
        className={`w-full py-1 px-3 ${icon ? 'pl-10' : ''} ${
          iconPosition === 'right' ? 'pr-10' : ''
        } border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-950`}
      />
      {icon && iconPosition === 'right' && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
