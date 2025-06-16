import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCaptain } from "../context/captainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = useCaptain();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captainData = {
      email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}captains/login`,
      captainData
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setPassword("");
    setEmail("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <Link to={"/"}>
          <img src={"captain-logo.png"} className="w-23 mb-6" alt="" />
        </Link>

        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base focus:outline-black focus:border-0"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base focus:outline-black focus:border-0"
            required
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-3 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>

        <p className="mb-4 text-center">
          Join a fleet?
          <Link to={"/captain-signup"} className="text-blue-600">
            {" "}
            Register as a captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/login"}
          className="bg-white flex items-center justify-center text-black font-semibold mb-7 rounded px-4 py-3 w-full text-lg outline-1 placeholder:text-base"
        >
          Sign in as user
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
