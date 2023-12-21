import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Root = () => {
    const location = useLocation();
  const noShared = location.pathname.includes('login') || location.pathname.includes('register');
  const noFooter = location.pathname.includes('dashboard');
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Root;