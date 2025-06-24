import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-end">
      <Link
        to={"/home"}
        className="h-12 fixed w-12 bg-white right-2 top-2 flex items-center justify-center rounded-full"
      >
        <i className="ri-home-5-line text-xl font-medium"></i>
      </Link>

      <div className="">
        <img className="h-full w-full object-cover" src="map.png" alt="" />
      </div>

      <div className="p-4 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <img className="h-16" src="go.webp" alt="" />

          <div className="text-right">
            <h2 className="text-lg font-medium">Amit</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">DL345A7</h4>
            <p className="text-sm text-gray-600">Swift Dzire</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 justify-between">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b border-gray-300">
              <i className="ri-map-pin-fill text-lg"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Rajeev Nagar, Begumpur Delhi
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-cash-line text-lg"></i>
              <div>
                <h3 className="text-lg font-medium">₹193.20</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-black text-white font-semibold p-2 rounded-lg mt-5">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
