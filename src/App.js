import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Routes, Route,useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigate } from 'react-router-dom';

import FirstPage from './Pages/FirstPage';
import Owner1 from './Pages/Owner1';
import Feedback from './Pages/Feedback';
import AboutUs from './Pages/AboutUs';
import GalleryPage from './Pages/GalleryPage';
import Search from './Pages/Search';
import Selling from "./Pages/Selling";
import Dashboard from "./DashboardProject/Welcome";
import DashboardHome from './DashboardProject/Dashboard';
import RegisterForm from './DashboardProject/RegisterForm';
import RegistrationTable from './DashboardProject/RegistrationTable';
import Application from './DashboardProject/Application';
import MaintenanceRequests from './DashboardProject/MaintenanceRequests';
import Payments from './DashboardProject/Payments';
import Messaging from './DashboardProject/Messaging';
import TenantManagement from './DashboardProject/TenantManagement';
import PropertyListing from './DashboardProject/PropertyListing';
import DashboardLayout from './DashboardProject/DashboardLayout';
import MainLayout from './Pages/MainLayout'; // ✅ Your layout with both navbars
import HouseListing from './Pages/HouseListing';
import Searchh from './Pages/Searchh';
import Searchm from './Pages/Searchm';
import Tenant1 from './Pages/Tenant1';

import './Pages/Selling.css';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  return (
    // <BrowserRouter>
    <AnimatePresence mode="wait">
      <Routes  location={location} key={location.pathname}>
        {/* 🏠 FirstPage (Landing Page) without Navbar */}
        <Route path="/" element={<FirstPage />} />

        {/* ✅ Pages that should have fixed Navbar (after FirstPage) */}
        <Route element={<MainLayout setShowLogin={setShowLogin} setShowSignup={setShowSignup} />}>
          <Route path="/Owner1" element={<Owner1 />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/sell" element={<Selling />} />
          <Route path="/Welcome" element={<Dashboard />} />
           <Route path="/Searchh" element={<Searchh/>} />
            <Route path="/Searchm" element={<Searchm />} />
            
        </Route>
          <Route path="/Tenant1" element={<Tenant1/>}/>
        {/* 📊 Dashboard Routes with Sidebar */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/table" element={<RegistrationTable />} />
          <Route path="/Applications" element={<Application />} />
          <Route path="/maintenance" element={<MaintenanceRequests />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/messages" element={<Messaging />} />
          <Route path="/TenantManagement" element={<TenantManagement />} />
          <Route path="/properties" element={<PropertyListing />} />
          <Route path="/HouseListing" element={<HouseListing />} />
        </Route>

        {/* 🔁 Default redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    {/* </BrowserRouter> */}
    </AnimatePresence>
  );
}

export default App;
