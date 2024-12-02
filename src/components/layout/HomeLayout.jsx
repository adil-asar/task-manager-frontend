import React from 'react';
import Sidebar from '../portion/Sidebar';
import Navbar from '../portion/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout flex h-screen">
      <Sidebar />
      <div className="content flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
