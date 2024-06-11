"use client";
import React, { useEffect, useRef, useState } from "react";
import { DashboardNavbar } from "../../HomeComponents";
import "../dashboard/styles/dashboard.css";
import "../_components/styles/user.css";
import BottomNavBar from "../_components/BottomNavBar";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import Link from "next/link";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
const Deposit = () => {
  const [amount, setAmount] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (router) {
      router.push(`/users/deposit_step_2?amount=${amount}`);
    }
  };
  return (
    <>
      <div>
        <DashboardNavbar />
        <div className="container" style={{ marginTop: "3rem" }}>
          <DashboardPageNavigator text="Deposit" />
          <div className="dashboard_">
            <div className="deposit">
              <h2>Fund Account</h2>
              <Link href="/" className="pricing">
                view pricing
              </Link>
              <div className="deposit__form">
                <form action="#" onSubmit={handleSubmit}>
                  <div className="input__deposit">
                    <label>Amount</label>
                    <div className="text__input">
                      <span>USD</span>
                      <input
                        type="number"
                        name="amount"
                        placeholder="0"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="input__deposit">
                    <label>To</label>
                    <select name="to__deposit" className="select__deposit">
                      <option value="Trading Balance">Trading Balance</option>
                      <option value="Bitcoin Mining">Bitcoin Mining</option>
                      <option value="Ethereum Mining">Ethereum Mining</option>
                      <option value="Dogecoin Mining">Dogecoin Mining</option>
                      <option value="Binance Coin Mining">
                        Binance Coin Mining
                      </option>
                      <option value="Cosmos (ATOM) Mining">
                        Cosmos (ATOM) Mining
                      </option>
                    </select>
                  </div>
                  <Button title="Proceed" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <BottomNavBar active="dashboard" />
      </div>
    </>
  );
};

export default Deposit;
