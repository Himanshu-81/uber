import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CaptainGuestOnlyWrapper = ({ children }) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/captain-home");
    }
  }, [token, navigate]);

  if (token) {
    return null;
  }

  return <>{children}</>;
};

export default CaptainGuestOnlyWrapper;
