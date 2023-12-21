import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    const location = useLocation();
  const noShared = location.pathname.includes('login') || location.pathname.includes('register');
  const noFooter = location.pathname.includes('dashboard');
    return (
        <div>
            {noShared || <Navbar/>}
            <Outlet/>
            {noShared || <Footer/>}
        </div>
    );
};

export default Root;