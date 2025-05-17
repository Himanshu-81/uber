import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setPassword("");
    setEmail("");
    setfirstName("");
    setLastName("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <Link to={"/"}>
          <img src={"logo.png"} className="w-23 mb-6" alt="" />
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
          <button className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-3 w-full text-lg placeholder:text-base">
            Sign up
          </button>
        </form>

        <p className="mb-4 text-center">
          Already have an account?
          <Link to={"/login"} className="text-blue-600">
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

export default UserSignUp;
