import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

const UserLogout = () => {
  const token = localStorage.getItem("token");

  const { setUser } = useUser();

  const navigate = useNavigate();

  axios
    .get(`${import.meta.env.VITE_BASE_URL}users/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
      }
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });

  return <></>;
};

export default UserLogout;
