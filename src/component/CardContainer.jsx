import React from 'react';
import Card from './Card';
// import useDataLoading from '../Hooks/useDataLoading';
import { useLoaderData } from 'react-router';

const CardContainer = () => {
    const appData = useLoaderData()
    // console.log(appData)
      const appDataSlice = appData.slice(0,8)
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:max-w-350 mx-auto'>
            {
                appDataSlice.map(data=><Card key={data.id} data={data}></Card>)
            }
            
        </div>
    );
};

export default CardContainer;