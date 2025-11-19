import React from 'react';
import google_play from '../assets/google_play.png'
import app_store from '../assets/app_store.png'
import { Link } from 'react-router';


const BannerContent = () => {
    return (
        <div className='flex space-y-5 my-10 flex-col justify-center items-center'>
            <div className='text-center text-7xl font-bold'><h1>We Build <br /> <span className='bg-linear-to-r text-transparent from-[#632EE3] to-[#9F62F2]  bg-clip-text'>Productive</span> Apps</h1></div>
            <p className='sm:w-190 text-center text-gray-400 text-md'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-5'>
                <Link to='https://play.google.com/store/apps?hl=en' target='_blank' className='flex border border-gray-300 rounded-sm p-2 justify-center gap-2 items-center'><img className="w-5 h-5" src={google_play} alt="" /> <span>Google  Play</span></Link>
            <Link to='https://www.apple.com/app-store/' target='_blank' className=' border border-gray-300 rounded-sm p-2 flex justify-center gap-2 items-center'><img className="w-5 h-5" src={app_store} alt="" /> <span>App Store</span></Link>
            </div>
            
        </div>
    );
};

export default BannerContent;