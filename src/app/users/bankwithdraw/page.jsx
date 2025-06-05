"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "../dashboard/styles/dashboard.css";
import "../_components/styles/user.css";
import Button from "../../components/Button";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import fetchUser from "../_components/FetchUser";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const BankWithdraw = () => {
  const { data } = fetchUser();
  const router = useRouter();

  const [fromAccount, setFromAccount] = useState("balance");
  const [accountNumber, setAccountNumber] = useState(null);
  const [accountName, setAccountName] = useState(null);
  const [amount, setAmount] = useState(null);
  const [bank, setBank] = useState(null);
  const [otpCode, setOtpCode] = useState(null);

  const formatNumber = (number) => {
    // Check if the number is a valid number or convert it to a string
    const parts = parseFloat(number).toFixed(2).toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/withdrawals", {
        type: "bank",
        id: data.id,
        fromAccount,
        amount,
        accountNumber,
        accountName,
        bank,
        otpCode,
        userOtp: data.otp_code,
      });

      if (response.data.message === "Success") {
        toast.success("Your withdrawal request is in process.");
        router.push(`withdrawal_list`);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";

      if (errorMessage === "otp") {
        toast.error(
          "Invalid OTP Code, please contact support for a valid OTP code and try again"
        );
      } else {
        toast.error(errorMessage);
      }
    }
  };
  if (!data) return null;
  return (
    <>
      <div>
        <DashboardNavbar />
        <div className="container" style={{ marginTop: "3rem" }}>
          <Toaster position="bottom-left" />
          <DashboardPageNavigator text="Bank Withdraw" />
          <div className="dashboard_">
            <span className="withdraw__heading">Withdraw to Bank</span>
            <div className="withdrawal">
              <form onSubmit={handleSubmit}>
                <p className="pard">
                  We may contact you for additional information.
                </p>
                <div className="withdraw_form">
                  <div className="col_1">
                    <div className="input__form">
                      <label>From</label>
                      <select
                        name="from__acc"
                        className="select__box"
                        onChange={(e) => setFromAccount(e.target.value)}
                      >
                        <option value="balance" selected="">
                          Trading Balance (
                          {data &&
                          data.transactions &&
                          data.transactions.length > 0
                            ? data.currency +
                              formatNumber(data.transactions[0]?.profit)
                            : ""}
                          )
                        </option>
                        <option value="btc">
                          Bitcoin Mining (
                          {data &&
                          data.transactions &&
                          data.transactions.length > 0
                            ? data.currency +
                              formatNumber(data.transactions[0]?.btc)
                            : ""}{" "}
                          BTC)
                        </option>
                        <option value="eth">
                          Ethereum Mining (
                          {data &&
                          data.transactions &&
                          data.transactions.length > 0
                            ? data.currency +
                              formatNumber(data.transactions[0]?.eth)
                            : ""}{" "}
                          ETH)
                        </option>
                        <option value="atom">
                          Cosmos Mining (
                          {data &&
                          data.transactions &&
                          data.transactions.length > 0
                            ? data.currency +
                              formatNumber(data.transactions[0]?.atom)
                            : ""}{" "}
                          ATOM)
                        </option>
                        <option value="doge">
                          Dogecoin Mining (
                          {data &&
                          data.transactions &&
                          data.transactions.length > 0
                            ? data.currency +
                              formatNumber(data.transactions[0]?.doge)
                            : ""}{" "}
                          DOGE)
                        </option>
                        <option value="bnb">
                          Binance Coin Mining (
                          {data &&
                          data.transactions &&
                          data.transactions.length > 0
                            ? data.currency +
                              formatNumber(data.transactions[0]?.bnb)
                            : ""}{" "}
                          BNB)
                        </option>
                        <option value="referral">
                          Referral Balance (
                          {data &&
                          data.transactions &&
                          data.transactions.length > 0
                            ? data.currency +
                              formatNumber(data.transactions[0]?.referral)
                            : ""}{" "}
                          )
                        </option>
                      </select>
                    </div>
                    <div className="input__form">
                      <label>Account Number</label>
                      <input
                        type="text"
                        name="account_number"
                        onChange={(e) => setAccountNumber(e.target.value)}
                      />
                    </div>
                    <div className="input__form">
                      <label>Account Name</label>
                      <input
                        type="text"
                        name="account_name"
                        onChange={(e) => setAccountName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col_1">
                    <div className="input__form">
                      <label>Amount</label>
                      <div className="input__usd">
                        <span>USD</span>
                        <input
                          type="number"
                          name="amount"
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="input__form">
                      <label>Bank Name</label>
                      <input
                        type="text"
                        name="bank_name"
                        onChange={(e) => setBank(e.target.value)}
                      />
                    </div>
                    <div className="input__form">
                      <label>OTP Code</label>
                      <input
                        type="text"
                        name="otp_code"
                        onChange={(e) => setOtpCode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <Button title="Submit" />
              </form>
            </div>
          </div>
        </div>
        <BottomNavBar active="dashboard" />
      </div>
    </>
  );
};

export default BankWithdraw;
