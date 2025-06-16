import { useEffect } from "react";
import { useCaptain } from "../context/captainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const { isLoading, setIsLoading } = useCaptain();

  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/captain-login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}captains/verify-token`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 200) {
          setIsLoading(false); // Token is valid
        } else {
          setIsLoading(false);
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      } catch (err) {
        setIsLoading(false);
        localStorage.removeItem("token");
        navigate("/captain-login");
      }
    };

    verifyToken();
  }, [navigate, setIsLoading]);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
