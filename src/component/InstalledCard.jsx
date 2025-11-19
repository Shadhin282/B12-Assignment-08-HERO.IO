import React  from 'react';
import downloadIcon from "../assets/icon-downloads.png"
import ratingIcon from "../assets/icon-ratings.png"
import { toast } from 'react-toastify';
import {getStoreApp} from "../Utility/AddToLocalStorage"
// import { RemoveLocalStorage } from '../Utility/RemoveLocalStorage';
import { useLoaderData } from 'react-router';


const InstalledCard = ({setInstalList, instalData }) => {
    //  console.log(instalData)
    const appData = useLoaderData()
    // console.log(appData)
    const {image,title,companyName,size,ratingAvg,downloads,id} = instalData
   
    const handleUninstall = (id) => {
        toast("Unstalled Successfully!")
      
        const storedAppData = getStoreApp()
        // console.log(storedAppData)
        const convertedStoredApp = storedAppData.map(id=>parseInt(id))
        const filterStorageData = convertedStoredApp.filter(dataId => dataId !== id)
        localStorage.setItem("InstalledList", JSON.stringify(filterStorageData))
          
        const updateStoredAppData = getStoreApp()
            // console.log(storedAppData)
            const convertedUpdateStoredApp = updateStoredAppData.map(id => parseInt(id))
            // console.log(convertedStoredApp)
            const updateInstalList = appData.filter(app => convertedUpdateStoredApp.includes(app.id))
            // console.log(myInstalList.length)
            setInstalList(updateInstalList)
    }
    
   

    return (
        <ul className="list bg-base-100 rounded-box shadow-md my-2 p-5">
  
  
  
  <li className="list-row">
                <div><img className="size-10 rounded-box" src={ image } /></div>
    <div>
                    <div className='text-md font-bold mb-1'>{companyName}: {title}</div>
                    <div className="flex gap-4 text-xs uppercase font-semibold opacity-60">
                        <div className='flex gap-2 text-green-500'><img className='w-4 mr-0' src={downloadIcon} alt="" />{downloads}</div>
                        <div className='flex gap-2 text-green-500'><img className='w-4' src={ratingIcon} alt="" />{ratingAvg}</div>
                        <div className=' text-gray-500'>{size} MB</div>
                    </div>
    </div>
    
    <button onClick={()=>handleUninstall(id)} className="btn bg-green-500 text-white">
      Uninstall
    </button>
   
  </li>
  
  
</ul>
    );
};

export default InstalledCard;