"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import "../dashboard/styles/dashboard.css";
import "../_components/styles/user.css";
import Button from "../../components/Button";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
const CryptoWithdraw = () => {
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
          <DashboardPageNavigator text="Crypto Withdraw" />
          <div className="dashboard_" ref={dashboardRef}>
            <span className="withdraw__heading">Withdraw to Crypto</span>
            <div className="withdrawal">
              <div className="withdraw_form" style={{ width: "500px" }}>
                <div className="col_1" style={{ width: "100%" }}>
                  <div className="input__form">
                    <label>From</label>
                    <select name="from__acc" className="select__box">
                      <option value="trading_balance_total" selected="">
                        Trading Balance ($0.00)
                      </option>
                      <option value="mining_balance_btc">
                        Bitcoin Mining (0 BTC)
                      </option>
                      <option value="mining_balance_eth">
                        Ethereum Mining (0 ETH)
                      </option>
                      <option value="mining_balance_atom">
                        Cosmos Mining (0 ATOM)
                      </option>
                      <option value="mining_balance_doge">
                        Dogecoin Mining (0 DOGE)
                      </option>
                      <option value="mining_balance_bnb">
                        Binance Coin Mining (0 BNB)
                      </option>
                      <option value="referral_balance">
                        Referral Balance ($0.00)
                      </option>
                    </select>
                  </div>
                  <div className="input__form">
                    <label>Crypto Currency</label>
                    <select name="crypto_currency" className="select__box">
                      <option value="Bitcoin BTC" selected="">
                        Bitcoin BTC
                      </option>
                      <option value="Tether USDT">Tether USDT</option>
                      <option value="Ethereum ETH">Ethereum ETH</option>
                    </select>
                  </div>
                  <div className="input__form">
                    <label>Amount</label>
                    <div className="input__usd">
                      <span>USD</span>
                      <input type="number" name="amount" />
                    </div>
                  </div>
                  <div className="input__form">
                    <label>Wallet Address</label>
                    <input type="text" name="wallet_address" />
                  </div>
                  <div className="input__form">
                    <label>AOTP Code</label>
                    <input type="text" name="otp_code" />
                  </div>
                </div>
              </div>
              <Button title="Submit" />
            </div>
          </div>
        </div>
        <BottomNavBar active="dashboard" />
      </div>
    </>
  );
};

export default CryptoWithdraw;
