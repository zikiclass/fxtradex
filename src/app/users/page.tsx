"use client";
import React, { useEffect, useRef } from "react";
import { NavBarLight } from "../HomeComponents";
import DepositInfo from "./_components/DepositInfo";
import "./styles/dashboard.css";
import BottomNavBar from "./_components/BottomNavBar";
import Categories from "./_components/Categories";
const Dashboard = () => {
  const dashboardRef = useRef(null);

  useEffect(() => {
    if (dashboardRef.current) {
      dashboardRef.current.classList.add("fadeIn");
    }
  }, []);
  return (
    <div>
      <NavBarLight />
      <div className="container" style={{ marginTop: "7rem" }}>
        <div className="dashboard" ref={dashboardRef}>
          <DepositInfo />
          <Categories />
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Dashboard;
