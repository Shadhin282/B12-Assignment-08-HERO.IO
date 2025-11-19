import React from 'react';
import BannerContent from '../component/BannerContent';
import BannerBorad from '../component/BannerBorad';
import Card from '../component/Card';
import CardContainer from '../component/CardContainer';
import { Link,useNavigation } from 'react-router';
import LoadingLoader from '../component/LoadingLoader';


const Home = () => {
    const navigation = useNavigation()
    return (
        <div className=''>
            <meta name="description" content="HERO.IO is a modern real-time chat app built with React, offering secure messaging, group chats, and media sharing. Connect instantly and stay in touch!"/>
  <meta name="keywords" content="chat app, real-time messaging, React app, HERO.IO, secure chat, online communication, group chat, tailwind css, react router"/>
  <meta name="author" content="Shadhin Khan"/>

            {
                 navigation.state==="loading" ?
            <LoadingLoader></LoadingLoader>: <div>
                <BannerContent />
            <BannerBorad></BannerBorad>
            <h2 className='text-center text-5xl font-bold mt-20'>Trending Apps</h2>
            <p className='text-center my-5 text-gray-400 text-lg'>Explore All Trending Apps on the Market developed by us</p>
           
            <CardContainer></CardContainer>
            <div className='text-center my-7'>
                <Link to='/apps' className='text-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold btn text-white '>Show All</Link>
            </div>
                </div>
            
           }
            
        </div>
    );
};

export default Home;