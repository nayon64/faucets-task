import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Main = () => {
	return (
    <div className="min-vh-100 d-flex flex-column justify-content-between bg-blue-10">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;