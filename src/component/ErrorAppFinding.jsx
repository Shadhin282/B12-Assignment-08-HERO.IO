import React from 'react';
import appError from "../assets/App-Error.png"
import { Link, useNavigate } from 'react-router';
const ErrorAppFinding = () => {
    const navigate =useNavigate()
    return (
        <div className='ml-30 w-50 sm:w-70 md:w-130 lg:w-200 h-screen max-auto flex flex-col gap-5 items-center jutify-center'>
            <img src={appError} alt="" />
            <h1 className='text-md md:text-2xl font-bold'>OPPS!! APP NOT FOUND</h1>
            
            <Link className='btn bg-linear-to-r  from-[#632EE3] to-[#9F62F2] text-white font-bold' to={navigate(-1)}>Go Back</Link>
        </div>
    );
};

export default ErrorAppFinding;