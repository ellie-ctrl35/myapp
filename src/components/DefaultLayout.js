import React from 'react';
import SideNav from './SideNav';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;