"use client";
import React, { useState } from "react";
import { DashboardNavbar } from "../../HomeComponents";
import "../dashboard/styles/dashboard.css";
import "../_components/styles/user.css";
import BottomNavBar from "../_components/BottomNavBar";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import Link from "next/link";
import Button from "../../components/Button";
import { tradersList } from "../../components/index/data";
import Image from "next/image";
import Swal from "sweetalert2";

const Traders = () => {
  const [copiedTraders, setCopiedTraders] = useState([]);

  const handleCopy = (traderId) => {
    if (!copiedTraders.includes(traderId)) {
      setCopiedTraders([...copiedTraders, traderId]);
      Swal.fire({
        icon: "success",
        title: "Copied!",
        text: "You have successfully copied this trader.",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Already Copied",
        text: "You have already copied this trader.",
      });
    }
  };

  return (
    <>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Traders" />
        <div className="dashboard__">
          <div className="dashboard_">
            {tradersList.map((trader) => {
              const isCopied = copiedTraders.includes(trader.id);
              return (
                <div className="trader" key={trader.id}>
                  <Image
                    className="trader__img"
                    src={trader.img}
                    alt={trader.name}
                    width={100}
                    height={100}
                  />
                  <div className="details">
                    <p>{trader.name}</p>
                    <span>{trader.winrate}% Win Rate</span>
                    <span>{trader.profitshare}% Profit Share</span>
                  </div>
                  <div className="btn__copy">
                    <Button
                      title={isCopied ? "COPIED" : "COPY"}
                      onClick={() => handleCopy(trader.id)}
                      disabled={isCopied}
                      style={{
                        backgroundColor: isCopied ? "#4caf50" : "#007bff",
                        color: "#fff",
                        cursor: isCopied ? "not-allowed" : "pointer",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BottomNavBar active="dashboard" />
    </>
  );
};

export default Traders;
