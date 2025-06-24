import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = ({ setConfirmRidePopupPanel, setRidePopupPanel }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">
        Confirm this Ride to Start
      </h3>

      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h2 className="text-lg font-medium">Sanjay Singh</h2>
        </div>

        <h5 className="text-lg font-semibold">4.1 Km</h5>
      </div>

      <div className="flex flex-col items-center gap-2 justify-between">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b border-gray-300">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Rajeev Nagar, Begumpur Delhi
              </p>
            </div>
          </div>
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
        <Link
          to={"/ride-started"}
          onClick={() => {}}
          className="w-full flex justify-center bg-black text-white font-semibold p-3 rounded-lg mt-5"
        >
          Confirm
        </Link>
        <button
          onClick={() => {
            setConfirmRidePopupPanel(false);
            setRidePopupPanel(false);
          }}
          className="w-full border-1 border-black font-semibold p-3 rounded-lg mt-1"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
