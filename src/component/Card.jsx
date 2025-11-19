import React from "react";
import ratingImg from "../assets/icon-ratings.png";
import { Download } from "lucide-react";
import { useNavigate } from "react-router";
import LoadingLoader from "./LoadingLoader";

const Card = ({ data }) => {
  
  const navigate = useNavigate();


  const { title, companyName, image, ratingAvg, size,id } = data;
    // const handleClick = () => {
        
  // }
  // console.log(image)
  return (
    <div onClick={()=>navigate(`/app-details/${id}`)} className="card bg-base-100 shadow-lg space-y-2 border p-4 hover:scale-105 transition ease-in-out">
      <figure>

        <img className="w-full h-50 rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-center">
          {companyName}: {title}
        </h2>

        <div className="card-actions justify-between">
          <div className="badge bg-gray-300 text-green-600">
            <Download className="w-4" />
            {size}M
          </div>
          <div className="badge  bg-red-200 text-red-400">
            <img className="w-4" src={ratingImg} alt="" />{" "}
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
