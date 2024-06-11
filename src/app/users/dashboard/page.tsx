"use client";
import React from "react";
import { DashboardNavbar } from "../../HomeComponents";
import DepositInfo from "../_components/DepositInfo";
import "./styles/dashboard.css";
import BottomNavBar from "../_components/BottomNavBar";
import Categories from "../_components/Categories";
const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "7rem" }}>
        <div className="dashboard">
          <DepositInfo />
          <Categories />
        </div>
      </div>
      <BottomNavBar active="dashboard" />
    </div>
  );
};

export default Dashboard;
