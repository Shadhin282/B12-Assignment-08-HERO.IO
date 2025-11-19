import React,{useState} from "react";
// import useDataLoading from "../Hooks/useDataLoading";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import Rechart from "../component/Rechart";
import { addToLocalStorage, getStoreApp } from "../Utility/AddToLocalStorage";
import { toast } from "react-toastify";


const AppDetails = () => {
  // const { appData } = useDataLoading();
  const [toggle,setToggle] = useState(false)
  const appData = useLoaderData();
  // console.log(appData)
  const { id } = useParams();
  const appDetailsData = appData.find((detailsData) => detailsData.id == id);
  // console.log((appDetailsData))
  const {title,companyName,image,description,size,reviews,ratingAvg,downloads,ratings,} = appDetailsData;
  // const appRating = ratings.map(data => data.count);
  // console.log(appRating)
  // const appRatingName = ratings.map(data => data.name);
  // console.log(appRatingName)
  const storedAppData = getStoreApp()
  const handleInstalled = (id) => {
    addToLocalStorage(id)
    toast("Installed Successfully")
    setToggle(true)
  }
  return (
    <div className="xl:max-w-350 mx-auto my-10">
      <title>{title}</title>
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 items-center justify-start">
        <div>
          <img className="w-50 h-50" src={image} alt="" />
        </div>
        <div className="px-10">
          <div className="space-y-2.5 my-2.5 ">
            <h2 className="text-3xl font-bold">
              {companyName}:{title}
            </h2>
            <p className="text-gray-400 mb-7">
              Developed by{" "}
              <span className="bg-linear-to-r font-bold text-transparent from-[#632EE3] to-[#9F62F2] bg-clip-text">
                productive.io
              </span>
            </p>
          </div>
          <hr className="text-gray-200 mb-4" />
          <div className="flex flex-col gap-5">
            <div className="stats border-0 w-120 lg:stats-horizontal ">
              <div className="stat">
                <div className="stat-desc mb-2">
                  <img src={downloadImg} alt="" />
                </div>
                <div className="stat-title">Downloads</div>
                <div className="stat-value">{downloads}</div>
              </div>

              <div className="stat">
                <div className="stat-desc mb-2">
                  <img src={ratingImg} alt="" />
                </div>
                <div className="stat-title">Average Ratings</div>
                <div className="stat-value">{ratingAvg}</div>
              </div>

              <div className="stat">
                <div className="stat-desc mb-2">
                  <img src={reviewImg} alt="" />
                </div>
                <div className="stat-title">Total Reviews</div>
                <div className="stat-value">{reviews} </div>
              </div>
            </div>
            <div onClick={()=>handleInstalled(id)} disabled={storedAppData.includes(id) && true} className="skeleton btn text-white w-50 bg-green-500">
              {
                storedAppData.includes(id) ? <h1 disabled>Installed</h1> :  `Install Now (${size} MB)`
              } 
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-200 mx-20 my-4" />
      <div>
        <h3 className="ml-20 text-lg font-bold mt-10">Ratings</h3>
        <div className="mb-10">
       <Rechart ratings={ratings}></Rechart>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mx-10 my-4">Description</h3>
        <div className="mx-10 ">{description}</div>
      </div>
    </div>
  );
};

export default AppDetails;
