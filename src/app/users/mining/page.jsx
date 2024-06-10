"use client";
import React, { useEffect, useRef } from "react";
import { DashboardNavbar } from "../../HomeComponents";
import Contract from "../_components/Contract";
import "../dashboard/styles/dashboard.css";
import BottomNavBar from "../_components/BottomNavBar";
import MiningGHS from "../_components/MiningGHS";
const Mining = () => {
  const dashboardRef = useRef(null);

  useEffect(() => {
    if (dashboardRef.current) {
      dashboardRef.current.classList.add("fadeIn");
    }
  }, []);
  return (
    <>
      <div>
        <DashboardNavbar />
        <div className="container" style={{ marginTop: "7rem" }}>
          <div className="dashboard" ref={dashboardRef}>
            <Contract />
            <MiningGHS />
          </div>
        </div>
        <BottomNavBar active="mining" />
      </div>
    </>
  );
};
export default Mining;
