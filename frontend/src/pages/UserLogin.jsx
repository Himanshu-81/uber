import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/userContext.jsx";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);

      localStorage.setItem("token", data.token);

      navigate("/home");
    }

    setPassword("");
    setEmail("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <Link to={"/"}>
          <img src={"logo.png"} className="w-23 mb-6" alt="" />
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
          New to Uber?
          <Link to={"/signup"} className="text-blue-600">
            {" "}
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/captain-login"}
          className="bg-white flex items-center justify-center text-black font-semibold mb-7 rounded px-4 py-3 w-full text-lg outline-1 placeholder:text-base"
        >
          Login as captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
