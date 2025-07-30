// src/DashboardProject/DashboardLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar2 from './Navbar2';

const DashboardLayout = () => {
  return (
    
    <div style={{ display: 'flex', minHeight: '100vh' }}>
        
      <Sidebar />
      <div style={{ flex: 1 }}>
        {/* <Navbar2 /> */}
        <div style={{ padding: '20px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
