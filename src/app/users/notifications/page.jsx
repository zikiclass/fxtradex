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
          <DashboardPageNavigator text="Notifications" />
          <div className="dashboard_">
            <div className="deposit">
              <div className="deposit__form notifications">
                <p>
                  You may disable NOTIFICATIONS PERMISSION from your browser
                  settings, your browser settings will override the website
                  settings.
                </p>
                <p></p>
                <p>Notifications Permission (Browser): Granted</p>
                <form action="#">
                  <div className="input__deposit">
                    <label>Notifications Permission (Website)</label>
                    <select name="to__deposit" className="select__deposit">
                      <option value="Denied">Denied</option>
                      <option value="Granted">Granted</option>
                    </select>
                  </div>
                  <Button title="Update" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <BottomNavBar active="profile" />
      </div>
    </>
  );
};

export default Deposit;
