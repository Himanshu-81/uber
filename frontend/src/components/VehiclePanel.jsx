const VehiclePanel = ({ setConfirmedRideOpen, setVehiclePanelOpen }) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 text-3xl text-gray-300"
        onClick={() => setVehiclePanelOpen(false)}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => setConfirmedRideOpen(true)}
        className="flex border-3 border-transparent active:border-black mb-2 bg-gray-100 rounded-xl items-center justify-between w-full p-3"
      >
        <img src="go.webp" className="h-14" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹194.20</h2>
      </div>
      <div
        onClick={() => setConfirmedRideOpen(true)}
        className="flex border-3 border-transparent active:border-black mb-2 bg-gray-100 rounded-xl items-center justify-between w-full p-3"
      >
        <img src="bike.webp" className="h-14" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill">2</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65.70</h2>
      </div>
      <div
        onClick={() => setConfirmedRideOpen(true)}
        className="flex border-3 border-transparent active:border-black mb-2 bg-gray-100 rounded-xl items-center justify-between w-full p-3"
      >
        <img src="auto.webp" className="h-14" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹189.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
