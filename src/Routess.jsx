import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Sidenav from "./pages/Sidenav";

function Routess() {
  return (
    <>
      <Routes>
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
