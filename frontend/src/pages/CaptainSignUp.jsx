import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}captains/register`,
        captainData
      );
      if (response.status === 201) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error(error);
    }

    setPassword("");
    setEmail("");
    setfirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <Link to={"/"}>
          <img src={"captain-logo.png"} className="w-23 mb-6" alt="" />
        </Link>

        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex items-center justify-between gap-3 mb-7">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base focus:outline-black focus:border-0"
              required
              placeholder="first name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base focus:outline-black focus:border-0"
              required
              placeholder="last name"
            />
          </div>
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

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex items-center justify-between gap-3 mb-7">
            <input
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base focus:outline-black focus:border-0"
              required
              placeholder="vehicle color"
            />
            <input
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base focus:outline-black focus:border-0"
              required
              placeholder="vehicle plate"
            />
          </div>
          <div className="flex items-center justify-between gap-3 mb-7">
            <input
              type="number"
              min={1}
              max={8}
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base focus:outline-black focus:border-0"
              required
              placeholder="vehicle capacity"
            />
            <select
              name="vehicleType"
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base focus:outline-black focus:border-0"
            >
              <option style={{ display: "none" }}>Select vehicle type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-3 w-full text-lg placeholder:text-base">
            Sign up
          </button>
        </form>

        <p className="mb-4 text-center">
          Already have an account?
          <Link to={"/captain-login"} className="text-blue-600">
            Sign in
          </Link>
        </p>
      </div>
      <div>
        <p className="leading-tight text-[13px]">
          By proceeding, you consent to get emails including by automated means,
          from Uber and its affiliated email provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignUp;
