import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopupPanel]);
  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopupPanel]);

  return (
    <div className="h-screen overflow-hidden flex flex-col justify-end">
      <div className="fixed p-6 top-0 left-0 flex items-center justify-between w-full">
        <img className="w-16" src="logo.png" alt="" />
        <Link
          to={"/home"}
          className="h-12 w-12 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-xl font-medium"></i>
        </Link>
      </div>

      <div className="">
        <img className="h-full w-full object-cover" src="map.png" alt="" />
      </div>

      <div className="p-6 flex flex-col justify-end">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopupPanelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 w-full"
      >
        <RidePopUp
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 w-full h-screen"
      >
        <ConfirmRidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
