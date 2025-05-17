import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignUp from "./pages/UserSignUp.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignUP from "./pages/CaptainSignUP.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUP />} />
      </Routes>
    </div>
  );
}

export default App;
