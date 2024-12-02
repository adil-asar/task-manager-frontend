import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar bg-blue-600 w-full p-4 text-white">
      <ul className='flex'>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
