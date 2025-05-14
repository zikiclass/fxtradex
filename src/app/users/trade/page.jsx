"use client";
import React, { useEffect, useRef, useState } from "react";
import { DashboardNavbar } from "../../HomeComponents";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import BottomNavBar from "../_components/BottomNavBar";
import { FaLevelUpAlt, FaLevelDownAlt } from "react-icons/fa";
import btc from "../../../../public/img/btc.webp";
import fetchUser from "../_components/FetchUser";
import Swal from "sweetalert2";

import Image from "next/image";
import axios from "axios";
const Trade = () => {
  const { data } = fetchUser();
  const container = useRef();
  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");
  const [amount, setAmount] = useState(10);
  const [time, setTime] = useState(10); // Default time is 10 minutes
  const [leverage, setLeverage] = useState("1:2000"); // Default leverage
  const [openTrades, setOpenTrades] = useState([]);
  let interval;

  useEffect(() => {
    const fetchTrades = async () => {
      if (data?.id) {
        try {
          // Fetch the trades from the server
          const response = await axios.get(`/api/trade?userId=${data.id}`);
          const serverTrades = response.data.trades || [];

          // Retrieve any locally stored trades
          const localTrades =
            JSON.parse(localStorage.getItem("openTrades")) || [];

          // Sync server and local trades
          const enriched = serverTrades.map((trade) => {
            const now = new Date();
            const created = new Date(trade.createdAt);
            const totalSeconds = (trade.duration || time) * 60;
            const elapsed = Math.floor((now - created) / 1000);
            const remainingTime = totalSeconds - elapsed;

            // Restore the profit state if it exists in localStorage
            const localTrade = localTrades.find((t) => t.id === trade.id);
            const currentProfit = localTrade ? localTrade.currentProfit : 0;

            return {
              ...trade,
              remainingTime: Math.max(remainingTime, 0),
              currentProfit: currentProfit,
            };
          });

          // Filter out expired trades and save to localStorage
          const activeTrades = enriched.filter(
            (trade) => trade.remainingTime > 0
          );
          setOpenTrades(activeTrades);
          localStorage.setItem("openTrades", JSON.stringify(activeTrades));
        } catch (error) {
          console.error("Failed to fetch trades:", error);
        }
      }
    };

    fetchTrades();
  }, [data]); // Depend on `data` to trigger fetch on user change

  const handleBuySell = async (action) => {
    try {
      const response = await fetch("/api/trade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: data?.id,
          amount,
          leverage,
          action,
          time,
          email: data?.email,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result);
        Swal.fire({
          icon: "success",
          text: `Trade started successfully`,
          timer: 2000,
        });

        const newTrade = {
          ...result.trade,
          remainingTime: time * 60, // Convert minutes to seconds
          currentProfit: 0, // Start from 0 and increase to actual profit
        };

        // Update openTrades and save to localStorage
        const updatedTrades = [...openTrades, newTrade];
        setOpenTrades(updatedTrades);
        localStorage.setItem("openTrades", JSON.stringify(updatedTrades));
      } else {
        Swal.fire({
          icon: "error",
          text: `Insufficient funds! Please top up your balance to take this trade.`,
          timer: 2000,
        });
      }
    } catch (error) {
      console.error("Error placing trade:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOpenTrades((prevTrades) => {
        const updatedTrades = prevTrades
          .map((trade) => {
            if (trade.remainingTime > 0) {
              const fluctuation = (Math.random() - 0.5) * (trade.profit / 15);
              const profitStep = trade.profit / (trade.duration * 60);
              return {
                ...trade,
                remainingTime: trade.remainingTime - 1,
                currentProfit: trade.currentProfit + profitStep + fluctuation,
              };
            }
            return {
              ...trade,
              remainingTime: 0,
            };
          })
          .filter((trade) => trade.remainingTime > 0);

        localStorage.setItem("openTrades", JSON.stringify(updatedTrades));
        return updatedTrades;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleFirstSelectChange = (event) => {
    setFirstSelect(event.target.value);
    setSecondSelect(""); // Reset second select when first changes
  };

  // Convert remaining time in seconds to a more readable format (e.g., 5 minutes 30 seconds)
  const formatTime = (remainingTime) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.id = "tradingview-widget-script"; // Set a unique ID for the script

      // Configuration for the TradingView chart
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        allow_symbol_change: true,
        details: true,
        calendar: false,
        support_host: "https://www.tradingview.com",
      });

      // Append the script to the container
      container.current.appendChild(script);
    }
  }, []);

  return (
    <>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Trade" />
        <div className="trade">
          <div className="trade__col__2">
            <div
              className="tradingview-widget-container"
              ref={container}
              style={{ height: "calc(100vh - 64px)", width: "100%" }}
            ></div>
          </div>
          <div className="trade__col__1">
            {openTrades.length !== 0 && (
              <div className="open_trades">
                {openTrades.map((trade) => (
                  <div key={trade.id} className="open_trade">
                    <div className="open_trade_col1">
                      <Image src={btc} alt="btc" className="btcImage" />
                      <div className="open_trade_quote">
                        <span
                          className={trade.action === "buy" ? "buy" : "sell"}
                        >
                          {trade.action === "buy" ? "Buy" : "Sell"} BTCUSD
                        </span>
                        <p>Leverage: {trade.leverage}</p>
                      </div>
                    </div>
                    <div className="open_trade_col2">
                      <span
                        className={trade.profit.toFixed(2) > 0 ? "buy" : "sell"}
                      >
                        {trade.profit.toFixed(2) > 0
                          ? "+" + trade.profit.toFixed(2)
                          : "-" + trade.loss.toFixed(2)}{" "}
                        $
                      </span>
                      <p>{formatTime(trade.remainingTime)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="trade__col__1">
            <form action="">
              <div className="updown__">
                <button
                  type="button"
                  className="btn__buy"
                  onClick={() => handleBuySell("buy")}
                >
                  Buy <FaLevelUpAlt />
                </button>
                <button
                  type="button"
                  className="btn__sell"
                  onClick={() => handleBuySell("sell")}
                >
                  Sell <FaLevelDownAlt />
                </button>
              </div>
              <div className="levr">
                <div className="input__">
                  <label>
                    <label>Amount ({data && data.currency})</label>
                  </label>
                  <input
                    type="text"
                    placeholder="0.00"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="input__">
                  <label>Time (Minutes)</label>
                  <input
                    type="text"
                    placeholder="10"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="levr">
                <div className="input__">
                  <label>Leverage (5000 MAX)</label>
                  <input
                    type="text"
                    placeholder="1"
                    name="leverage"
                    value={leverage}
                    onChange={(e) => setLeverage(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BottomNavBar active="trade" />
    </>
  );
};

export default Trade;
