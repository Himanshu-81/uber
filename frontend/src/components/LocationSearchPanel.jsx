const LocationSearchPanel = ({ setPanelOpen, setVehiclePanelOpen }) => {
  // sample data for locations
  const locations = [
    "D-88A Rajiv Nagar, Begumpur Rohini Sector-22",
    "D-88B Rajiv Nagar, Begumpur Rohini Sector-22",
    "D-88C Rajiv Nagar, Begumpur Rohini Sector-22",
    "D-88D Rajiv Nagar, Begumpur Rohini Sector-22",
    "D-88E Rajiv Nagar, Begumpur Rohini Sector-22",
    "D-88F Rajiv Nagar, Begumpur Rohini Sector-22",
    "D-88G Rajiv Nagar, Begumpur Rohini Sector-22",
    "D-88H Rajiv Nagar, Begumpur Rohini Sector-22",
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
          key={index}
          className="flex border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start gap-4 w-full my-2"
          onClick={() => {
            setVehiclePanelOpen(true);
            setPanelOpen(false);
          }}
        >
          <h2 className="bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
