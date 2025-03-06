"use client";
import React, { useEffect, useRef, useState } from "react";
import { DashboardNavbar } from "../../HomeComponents";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import BottomNavBar from "../_components/BottomNavBar";
import { FaLevelUpAlt, FaLevelDownAlt } from "react-icons/fa";
import btc from "../../../../public/img/btc.webp";
import {
  TradeSelectFirst,
  TradeSelectSecond,
  TradeSelectThird,
} from "../../components/index/data";
import Image from "next/image";

const Trade = () => {
  const container = useRef();
  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");
  const [thirdSelect, setThirdSelect] = useState("");
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(10); // Default time is 10 minutes
  const [leverage, setLeverage] = useState(1); // Default leverage
  const [openTrades, setOpenTrades] = useState([]); // Store open trades

  // Add a new trade to the list of open trades
  const handleBuySell = (action) => {
    const trade = {
      id: Date.now(), // Unique ID for the trade
      symbol: thirdSelect,
      amount,
      time,
      leverage,
      action,
      remainingTime: time * 60, // Store time in seconds
    };

    // Add trade to the list
    setOpenTrades((prevTrades) => [...prevTrades, trade]);
  };

  // Countdown each trade every second
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenTrades((prevTrades) => {
        return prevTrades.map((trade) => {
          if (trade.remainingTime > 0) {
            return { ...trade, remainingTime: trade.remainingTime - 1 };
          }
          return trade; // No change if time is 0
        });
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
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
          <div className="trade__col__1">
            <div className="row">
              <select
                name="first_select"
                value={firstSelect}
                onChange={handleFirstSelectChange}
              >
                {TradeSelectFirst.map((tradeSelect, index) => (
                  <option value={tradeSelect} key={index}>
                    {tradeSelect}
                  </option>
                ))}
              </select>
              <select name="second_select">
                {firstSelect
                  ? TradeSelectSecond[firstSelect].map((tradeSelect, index) => (
                      <option value={tradeSelect} key={index}>
                        {tradeSelect}
                      </option>
                    ))
                  : TradeSelectSecond["Crypto (43)"].map(
                      (tradeSelect, index) => (
                        <option value={tradeSelect} key={index}>
                          {tradeSelect}
                        </option>
                      )
                    )}
              </select>
              <select
                name="third_select"
                value={thirdSelect}
                onChange={(e) => setThirdSelect(e.target.value)}
              >
                {TradeSelectThird.map((tradeSelect, index) => (
                  <option value={tradeSelect} key={index}>
                    {tradeSelect}
                  </option>
                ))}
              </select>
            </div>
            <div className="open_trades">
              {openTrades.length === 0 ? (
                <p>No open trades</p>
              ) : (
                openTrades.map((trade) => (
                  <div key={trade.id} className="open_trade">
                    <div className="open_trade_col1">
                      <Image src={btc} alt="btc" className="btcImage" />

                      <div className="open_trade_quote">
                        <span
                          style={{ fontWeight: "bold" }}
                          className={trade.action === "buy" ? "buy" : "sell"}
                        >
                          {trade.action} {trade.amount} BTCUSD
                        </span>
                        <p>83290.3 - 83780.2</p>
                      </div>
                    </div>
                    <div className="open_trade_col2">
                      <span className={trade.action === "buy" ? "buy" : "sell"}>
                        668.10
                      </span>
                      <p>({formatTime(trade.remainingTime)})</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="trade__col__2">
            <div
              className="tradingview-widget-container"
              ref={container}
              style={{ height: "calc(100vh - 64px)", width: "100%" }}
            ></div>
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
                  <label>Amount (USD)</label>
                  <input
                    type="text"
                    placeholder="0.00"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="input__">
                  <label>Amount (BTC)</label>
                  <input
                    type="text"
                    placeholder="0.00"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="levr">
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
