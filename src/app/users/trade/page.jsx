"use client";
import React, { useEffect, useRef, useState } from "react";
import { DashboardNavbar } from "../../HomeComponents";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import BottomNavBar from "../_components/BottomNavBar";
import {
  TradeSelectFirst,
  TradeSelectSecond,
  TradeSelectThird,
} from "../../components/index/data";
const Trade = () => {
  const container = useRef();

  useEffect(() => {
    // Check if the TradingView script is already appended
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

  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");
  const handleFirstSelectChange = (event) => {
    const { value } = event.target;
    setFirstSelect(value);
    setSecondSelect("");
  };
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
              <select name="third_select">
                {TradeSelectThird.map((tradeSelect, index) => (
                  <option value={tradeSelect} key={index}>
                    {tradeSelect}
                  </option>
                ))}
              </select>
            </div>
            <div className="open_trades">No open trades</div>
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
              <div className="input__">
                <label>Amount</label>
                <input type="number" value="0.00" name="amount" />
              </div>
              <div className="input__">
                <label>Time (Minutes)</label>
                <input type="number" value="10" name="time" />
              </div>
              <div className="input__">
                <label>Leverage (5000 MAX)</label>
                <input type="number" value="1" name="leverage" />
              </div>
              <button className="btn__buy">Buy</button>
              <button className="btn__sell">Sell</button>
              <label style={{ float: "right" }}>SOLUSD 89.66</label>
            </form>
          </div>
        </div>
      </div>
      <BottomNavBar active="trade" />
    </>
  );
};

export default Trade;
