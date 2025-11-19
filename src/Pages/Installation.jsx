import React,{useState,useEffect} from 'react';
// import useDataLoading from '../Hooks/useDataLoading';
import { getStoreApp } from '../Utility/AddToLocalStorage';
import { useLoaderData } from 'react-router';
import InstalledCard from '../component/InstalledCard';
import { ChevronDown } from 'lucide-react';



const Installation = () => {
    const [instalList, setInstalList] = useState([])
    const [sort,setSort] = useState('')
    const appData = useLoaderData()
    // console.log(appData)
    useEffect(() => {
        const storedAppData = getStoreApp()
        // console.log(storedAppData)
        const convertedStoredApp = storedAppData.map(id=>parseInt(id))
        // console.log(convertedStoredApp)
        const myInstalList = appData.filter(app=>convertedStoredApp.includes(app.id))
        // console.log(myInstalList.length)
        setInstalList(myInstalList)
    },[])
    // console.log(appData.map(data=> data.id))
    // console.log(instalList.length)

       const handleSort = (type) => {
        setSort(type)
        if (type === "Low-High") {
            const sortBySizes = [...instalList].sort((a, b) => a.size - b.size)
            setInstalList(sortBySizes)
        }
            
    
        if (type === "High-Low") {
            const sortBySizes = [...instalList].sort((a, b) => b.size - a.size)
            setInstalList(sortBySizes)
        }
    }


    return (
        <div className='max-w-350 mx-auto my-20'>
            <div className='text-center space-y-4 mb-5'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mb-2'>
                <h2 className='text-lg font-bold'>{instalList.length} Apps Found</h2>
                <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Sort by size<ChevronDown /> </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("Low-High")}>Low-High</a></li>
    <li><a onClick={()=>handleSort("High-Low")}>High-Low</a></li>
  </ul>
</div>
            </div>
            {instalList.map(instalData =><InstalledCard key={instalData.id} setInstalList={setInstalList} instalData={instalData}></InstalledCard>)
            }
        </div>
    );
};

export default Installation;