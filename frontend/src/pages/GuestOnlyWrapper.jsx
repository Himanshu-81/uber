import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GuestOnlyWrapper = ({ children }) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  if (token) {
    return null;
  }

  return <>{children}</>;
};

export default GuestOnlyWrapper;
