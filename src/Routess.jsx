import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Sidenav from "./pages/Sidenav";
import Adminlogin from "./pages/Adminlogin";
import TwoStepVerification from "./pages/TwoStepVerification";

function Routess() {
  return (
    <>
      <Routes>
        <Route path="/signup/verification" element={<TwoStepVerification />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Sidenav />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routess;
