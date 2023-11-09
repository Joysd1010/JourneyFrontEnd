import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../SHared/Header/Header';
import Footer from '../SHared/Footer/Footer';

const Layout = () => {
    return (
        <div  >
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Layout;