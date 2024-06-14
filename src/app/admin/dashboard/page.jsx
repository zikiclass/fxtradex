"use client";
import React, { useState } from "react";
import "../_components/admin.css";
import SideBar from "../_components/SideBar";
import NavBar from "../_components/NavBar";
import Cards from "../_components/Cards";
import Charts from "../_components/Charts";
const AdminDashboard = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="admin">
      <SideBar toggle={showNavbar} />
      <div className="ad__container">
        <NavBar onClick={handleClick} setIcon={showNavbar} />
        <h3 className="pageTitle">Dashboard</h3>
        <Cards />
        <Charts />
        <div className="bg__blue__"></div>
        <div className="bg__dark__"></div>
      </div>
    </div>
  );
};
export default AdminDashboard;
