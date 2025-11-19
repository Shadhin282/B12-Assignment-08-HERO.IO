import React from 'react';
import hero from '../assets/hero.png'

const BannerBorad = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={hero} alt="" />
            <div className='sm:h-100 w-full p-20 bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
                <h2 className='text-center text-5xl font-bold text-white'>Trusted by Millions, Built for You</h2>
                <div className='flex justify-center flex-col sm:flex-row items-center gap-25 mt-10'>
                    <div className='flex space-y-5 flex-col justify-center text-white items-center'>
                        <p className='text-xs text-gray-300'>Total Downloads</p>
                        <h1 className='text-5xl font-bold'>29.6M</h1>
                        <p className='text-xs text-gray-300'>21% more than last month</p>
                    </div>
                    <div className='flex space-y-5 flex-col justify-center text-white items-center'>
                        <p className='text-xs text-gray-300'>Total Reviews</p>
                        <h1 className='text-5xl font-bold'>906K</h1>
                        <p className='text-xs text-gray-300'>46% more than last month</p>
                    </div>
                    <div className='flex space-y-5 flex-col justify-center text-white items-center'>
                        <p className='text-xs text-gray-300'>Active Apps</p>
                        <h1 className='text-5xl font-bold'>132+</h1>
                        <p className='text-xs text-gray-300'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBorad;