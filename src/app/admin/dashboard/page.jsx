import React from "react";
import "../_components/admin.css";
import SideBar from "../_components/SideBar";
import NavBar from "../_components/NavBar";
import Cards from "../_components/Cards";
import Charts from "../_components/Charts";
const AdminDashboard = () => {
  return (
    <div className="admin">
      <SideBar />
      <div className="ad__container">
        <NavBar />
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
