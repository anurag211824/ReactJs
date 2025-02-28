/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Header'; // Importing the Header component
import Footer from './Footer'; // Importing the Footer component
import { Outlet } from 'react-router-dom'; // Importing Outlet from react-router-dom to render nested routes

// AppLayout component serves as a wrapper layout for the application
const AppLayout = () => {
  return (
    <>
      {/* Header component: Displays the header/navigation bar */}
      <Header />
      
      {/* Outlet component: Placeholder for nested route components */}
      <Outlet />
      
      {/* Footer component: Displays the footer section */}
      <Footer />
    </>
  );
};

export default AppLayout; // Exporting AppLayout as the default export
