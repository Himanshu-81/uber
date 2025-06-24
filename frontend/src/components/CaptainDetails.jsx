import React from "react";

const CaptainDetails = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-between">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h4 className="text-lg font-medium">Amit Kumar</h4>
        </div>

        <div>
          <h4 className="text-xl font-semibold">₹393.20</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      <div className="flex p-3 bg-gra-100 rounded-xl justify-center gap-5 items-start mt-4">
        <div className="text-center">
          <i className="ri-timer-2-line text-3xl mb-2 font-extralight"></i>

          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-line text-3xl mb-2 font-extralight"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-booklet-line text-3xl mb-2 font-extralight"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
