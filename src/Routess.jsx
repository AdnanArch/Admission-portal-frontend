import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Adddepartments from "./pages/Adddepartments";
import Sidenav from "./pages/Sidenav";
import Adminlogin from "./pages/Adminlogin";
import TwoStepVerification from "./pages/TwoStepVerification";
import Applications from "./pages/Applications";

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
          <Route path="/departments" element={<Adddepartments />} />
          <Route path="/applications" element={<Applications />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routess;
