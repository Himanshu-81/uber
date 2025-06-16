import { Route, Routes } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignUp from "./pages/UserSignUp.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignUP from "./pages/CaptainSignUp.jsx";
import Home from "./pages/Home.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import UserProtectedWrapper from "./pages/UserProtectedWrapper.jsx";
import GuestOnlyWrapper from "./pages/GuestOnlyWrapper.jsx";
import CaptainHome from "./pages/CaptainHome.jsx";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper.jsx";
import CaptainGuestOnlyWrapper from "./pages/CaptainGuestOnlyWrapper.jsx";
import CaptainLogout from "./pages/CaptainLogout.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            <GuestOnlyWrapper>
              <UserLogin />
            </GuestOnlyWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <GuestOnlyWrapper>
              <UserSignUp />
            </GuestOnlyWrapper>
          }
        />
        <Route
          path="/captain-login"
          element={
            <CaptainGuestOnlyWrapper>
              <CaptainLogin />
            </CaptainGuestOnlyWrapper>
          }
        />
        <Route
          path="/captain-signup"
          element={
            <CaptainGuestOnlyWrapper>
              <CaptainSignUP />
            </CaptainGuestOnlyWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />

        <Route
          path="/user/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain/logout"
          element={
            <CaptainProtectedWrapper>
              <CaptainLogout />
            </CaptainProtectedWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
