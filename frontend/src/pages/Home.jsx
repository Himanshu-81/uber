import React from "react";

const Home = () => {
  return (
    <div className="h-screen relative">
      <img className="w-20 absolute left-5 top-5" src="logo.png" alt="" />

      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src="map.png" alt="" />
      </div>

      <div className="absolute h-screen flex flex-col justify-end top-0 w-full">
        <div className="h-[30%] p-5 bg-white">
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick up location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div className="h-0"></div>
      </div>
    </div>
  );
};

export default Home;
