"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import "../dashboard/styles/dashboard.css";
import "../_components/styles/user.css";
import PanelPlain from "../_components/Panel";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
const DepositStep2 = () => {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const dashboardRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (dashboardRef.current) {
      dashboardRef.current.classList.add("fadeIn");
    }
  }, []);
  const handleClick = (e) => {
    router.push(`deposit_step_3?amount=${amount}`);
  };
  return (
    <>
      <div>
        <DashboardNavbar />
        <div className="container" style={{ marginTop: "3rem" }}>
          <DashboardPageNavigator text="Deposit" />
          <div className="dashboard_" ref={dashboardRef}>
            <div className="deposit">
              <h2>
                PAY{" "}
                {Number(amount).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </h2>
              <p style={{ marginTop: "-20px" }}>SELECT PAYMENT METHOD</p>

              <PanelPlain
                title="Send Crypto"
                text="send supported crypto currencies"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
        <BottomNavBar active="dashboard" />
      </div>
    </>
  );
};

export default DepositStep2;
