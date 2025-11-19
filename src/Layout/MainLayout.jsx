import React from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
;

const MainLayout = () => {
    
    return (
        <div className='min-h-screen flex flex-col '>
            <NavBar></NavBar>
            {
            <div className='flex-1 '>
                <Outlet></Outlet>
            </div>
            }
            <Footer></Footer>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;