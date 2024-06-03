"use client";
import React, { useEffect, useRef } from "react";
import { NavBarLight } from "../HomeComponents";
import Contract from "../users/_components/Contract";
import "../users/styles/dashboard.css";
import BottomNavBar from "../users/_components/BottomNavBar";
import MiningGHS from "../users/_components/MiningGHS";
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
        <NavBarLight />
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
