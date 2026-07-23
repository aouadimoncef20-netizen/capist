/* ============================================
   CAPIST — Main Layout
   Wraps every page with Navbar and Footer.
   The <Outlet /> is where the page content appears.
   ============================================ */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      {/* Navbar is fixed at the top */}
      <Navbar />

      {/* Page content appears here, with padding to clear the navbar */}
      <main style={{ paddingTop: 'var(--navbar-height)', minHeight: '100vh' }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
