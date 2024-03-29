import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import { Outlet } from "react-router";
import "./App.css";
import { getToday } from "./utils/dateTimeHandler";

const App = () => {
  return (
    <div className="container flex flex-column space-between">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
