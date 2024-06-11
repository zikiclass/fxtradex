import React from "react";
import { DashboardNavbar } from "../../HomeComponents";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import BottomNavBar from "../_components/BottomNavBar";
const Markets = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Markets" />
      </div>
      <BottomNavBar active="markets" />
    </>
  );
};

export default Markets;
