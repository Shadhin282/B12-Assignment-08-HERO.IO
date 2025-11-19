import React from 'react';
import { ClipLoader } from 'react-spinners';
const LoadingLoader = () => {
    return (
        <div className='text-center'>
    
           Loading ..  <ClipLoader />
        </div>
    );
};

export default LoadingLoader;