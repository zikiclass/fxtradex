"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "../dashboard/styles/dashboard.css";
import "../_components/styles/user.css";
import Button from "../../components/Button";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
const CashAppWithdraw = () => {
  const router = useRouter();

  const handleClick = (e) => {
    router.push(`deposit_step_3?amount=${amount}`);
  };
  return (
    <>
      <div>
        <DashboardNavbar />
        <div className="container" style={{ marginTop: "3rem" }}>
          <DashboardPageNavigator text="CashApp Withdraw" />
          <div className="dashboard_">
            <span className="withdraw__heading">Withdraw to CashApp</span>
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
                    <label>Amount</label>
                    <div className="input__usd">
                      <span>USD</span>
                      <input type="number" name="amount" />
                    </div>
                  </div>
                  <div className="input__form">
                    <label>Cash Tag</label>
                    <input type="text" name="cash__tag" />
                  </div>
                  <div className="input__form">
                    <label>OTP Code</label>
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

export default CashAppWithdraw;
