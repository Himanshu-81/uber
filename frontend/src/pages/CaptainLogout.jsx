import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCaptain } from "../context/captainContext";

const CaptainLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setCaptain } = useCaptain();

  axios
    .get(`${import.meta.env.VITE_BASE_URL}captains/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("token");
        setCaptain(null);
        navigate("/captain-login");
      }
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
  return <></>;
};

export default CaptainLogout;
