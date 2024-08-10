import React from 'react';

const Button = ({ leftIcon, rightIcon, children, ...props }) => {
  return (
    <button
      {...props}
      className="flex items-center justify-center px-4 py-2 bg-slate-950 text-white font-semibold rounded-md hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950/50 focus:ring-offset-0"
    >
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </button>
  );
};

export default Button;
