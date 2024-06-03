"use client";
import React, { useEffect, useRef } from "react";
import { NavBarLight } from "../HomeComponents";
import DepositInfo from "../users/_components/DepositInfo";
import "../users/styles/dashboard.css";
import BottomNavBar from "../users/_components/BottomNavBar";
import Categories from "../users/_components/Categories";
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
            <DepositInfo />
            <Categories />
          </div>
        </div>
        <BottomNavBar />
      </div>
    </>
  );
};
export default Mining;
