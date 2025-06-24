import React from "react";
import { Link } from "react-router-dom";

const CaptainRiding = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-end relative">
      <div className="fixed p-6 top-0 left-0 flex items-center justify-between w-full">
        <img className="w-16" src="logo.png" alt="" />
        <Link
          to={"/home"}
          className="h-12 w-12 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-xl font-medium"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img className="h-full w-full object-cover" src="map.png" alt="" />
      </div>

      <div className="h-1/5 bg-yellow-400 flex items-center justify-between p-5 relative">
        <h5
          className="p-1 text-center w-[95%] absolute top-0 text-3xl text-gray-600"
          onClick={() => {}}
        >
          <i className="ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="border-1 bg-black text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
    </div>
  );
};

export default CaptainRiding;
