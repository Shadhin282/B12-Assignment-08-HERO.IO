import React from 'react';
import useData from '../Hooks/useData';
import Card from '../component/Card';
import { useState } from "react";
import ErrorAppFinding from '../component/ErrorAppFinding';
import LoadingLoader from '../component/LoadingLoader';

const Apps = () => {
    const { appData } = useData()
    // console.log(appData)
  const [search, setSearch] = useState("");
  const [loading,setLoading] =useState(false)
  const {title} = appData
  // console.log(search)
  const term = search.trim().toLocaleLowerCase();
  const searchedProduct = term
    ? appData.filter((product) =>
      product.title.toLocaleLowerCase().includes(term)
      
      )
    : appData;
  
  const handleSearch = (e) => {
     const value = e.target.value;
    setSearch(value)
    setLoading(true)
    setTimeout(async () => {
     
      
      searchedProduct.finally(setLoading(false))
    },1000)
  }
  
    return (
      <div className='max-w-350 mx-auto my-10'>
        
            <div className='text-center my-10 space-y-4'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-sm text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex justify-between items-center my-5">
        <h2 className="text-2xl font-bold">
          
          <span className="text-2xl">
            ({searchedProduct.length}) Apps found 
          </span>
        </h2>
        <label className="input">
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            placeholder="Search products"
          />
        </label>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {
          loading ? <div className='text-center'><h1 className="text-4xl font-bold text-gray-900">Loading....</h1></div> : searchedProduct.map((data) => (
          <Card key={data.id} data={data}></Card> 
           )) }
          
        </div>
        <div>
          {
            searchedProduct.length ===0 && <div className='text-center'><h1 className="text-4xl font-bold text-gray-900">App not Found</h1></div>
          }
        </div>
        </div>
    );
};

export default Apps;