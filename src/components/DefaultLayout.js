import React from 'react';
import SideNav from './SideNav';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <SideNav />
      <main className="flex-1 h-full  overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
