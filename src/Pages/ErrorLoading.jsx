import React from 'react';
import errorImg from "../assets/error-404.png"
import { Link, useNavigate } from 'react-router';


const ErrorLoading = () => {
    const navigate = useNavigate()
    
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <img src={errorImg} alt="" />
            <h1>Oops, Page not Found</h1>
            <p>The page you are looking for is not available.</p>
            <Link className='btn bg-linear-to-r  from-[#632EE3] to-[#9F62F2] text-white font-bold' to={navigate(-1)}>Go Back</Link>
        </div>
    );
};

export default ErrorLoading;