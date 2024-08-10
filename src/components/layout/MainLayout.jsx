import React from 'react';
import Header from '../sections/Header';

const MainLayout = ({ children, subtitle }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <div className="pt-14 pb-6">
          <h1 className="text-slate-950 text-3xl font-semibold text-center mb-8">
            Post Management
          </h1>
          <h2 className="text-slate-950 text-2xl text-center sm:text-left">
            {subtitle}
          </h2>
        </div>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
