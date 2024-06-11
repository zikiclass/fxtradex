"use client";

import React, { useState } from "react";
import "../dashboard/styles/dashboard.css";
import "../_components/styles/user.css";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import CloseIcon from "@mui/icons-material/Close";
const DepositList = () => {
  const [showPendingMsg, setShowPendingMsg] = useState(true);

  const pendingLists = [
    {
      id: 1,
      month: "JUN",
      day: "10",
      amount: "$2,000.00",
      details: "3 Ethereum Mining (Pending)",
      crypto: "0.02868 BTC",
    },
    {
      id: 1,
      month: "JUN",
      day: "09",
      amount: "$2,000.00",
      details: "3 Ethereum Mining (Pending)",
      crypto: "USDT",
    },
    {
      id: 1,
      month: "JUN",
      day: "09",
      amount: "$2,000.00",
      details: "3 Ethereum Mining (Pending)",
      crypto: "PIX",
    },
    {
      id: 1,
      month: "JUN",
      day: "09",
      amount: "$2,000.00",
      details: "3 Ethereum Mining (Pending)",
      crypto: "USDT",
    },
    {
      id: 1,
      month: "JUN",
      day: "09",
      amount: "$2,000.00",
      details: "3 Ethereum Mining (Pending)",
      crypto: "0.54018 ETH",
    },
  ];
  return (
    <>
      <div>
        <DashboardNavbar />
        <div className="container" style={{ marginTop: "3rem" }}>
          <DashboardPageNavigator text="Deposit" />
          <div className="dashboard_">
            {showPendingMsg && (
              <div className="deposit_pending">
                <p>
                  Deposits will be pending until there are sufficent
                  confirmations on the blockchain.
                </p>
                <CloseIcon
                  className="deposit_pending_icon"
                  onClick={() => setShowPendingMsg(false)}
                />
              </div>
            )}
            {pendingLists.map((pendingList) => (
              <div className="deposit_list" key={pendingList.id}>
                <div className="date">
                  <span>{pendingList.month}</span>
                  <span>{pendingList.day}</span>
                </div>
                <div className="deposit_list_details">
                  <span>{pendingList.amount}</span>
                  <span>{pendingList.details}</span>
                </div>
                <div className="crypto_equiv">{pendingList.crypto}</div>
              </div>
            ))}
          </div>
        </div>
        <BottomNavBar active="dashboard" />
      </div>
    </>
  );
};

export default DepositList;
