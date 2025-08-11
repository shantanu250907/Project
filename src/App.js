import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigate } from 'react-router-dom';

import FirstPage from './Pages/FirstPage';
import Owner1 from './Pages/Owner1';
import Feedback from './Pages/Feedback';
import AboutUs from './Pages/AboutUs';
import './Pages/AboutUs.css';
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
import Searchm from './Pages/Searchm';
import './Pages/Searchm.css';
import Tenant1 from './Pages/Tenant1';
import Booknow from './Pages/Booknow';
import './Pages/Selling.css';
import CartPage from './Pages/CartPage';
import './Pages/CartPage.css';
import CartContext from './Pages/CartContext';
import './Pages/Booknow.css';
import wishlist from './Pages/Wishlist.js';
import './Pages/WishList.css';
import Sellingt from './Pages/Sellingt.js';
import ContactUs from './Pages/ContactUs';
import Wishlist from './Pages/Wishlist.js';
import MainLayout1 from './Pages/MainLayout1.js';
// import Maintenance1 from './Pages/Maintenance1';
import Faq from './Pages/Faq.js';
import PrivacyPolicy from './Pages/Privacy.js';
import Learn from './Pages/Learn.js';
import Cards from './Pages/Cards.js';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  return (
    // <BrowserRouter>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/CartContext" element={<CartContext />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Searchm" element={<Searchm />} />
          <Route path="/Booknow" element={<Booknow />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Privacy" element={<PrivacyPolicy />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/cards" element={<Cards/>} />
        </Route>

        <Route element={<MainLayout1 setShowLogin={setShowLogin} setShowSignup={setShowSignup} />}>
          <Route path="/Tenant1" element={<Tenant1 />} />
          <Route path="/Sellingt" element={<Sellingt />} />
        </Route>
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
