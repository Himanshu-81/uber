const LookingForDriver = ({ setVehicleFound }) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 text-3xl text-gray-300"
        onClick={() => setVehicleFound(false)}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>

      <div className="flex flex-col items-center gap-2 justify-between">
        <img className="h-20" src="go.webp" alt="" />

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
      </div>
    </div>
  );
};

export default LookingForDriver;
