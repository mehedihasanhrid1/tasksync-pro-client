import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
    const location = useLocation();
  const noShared = location.pathname.includes('login') || location.pathname.includes('register');
  const noFooter = location.pathname.includes('dashboard');
    return (
        <div>
            {noShared || <Navbar/>}
            <Outlet/>
        </div>
    );
};

export default Root;