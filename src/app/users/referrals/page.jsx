"use client";
import React from "react";
import { DashboardNavbar } from "../../HomeComponents";
import "../dashboard/styles/dashboard.css";
import "../_components/styles/user.css";
import BottomNavBar from "../_components/BottomNavBar";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import Link from "next/link";
import { project_link } from "../../../../env";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
const Referrals = () => {
  const router = useRouter();

  const handleWithdraw = (e) => {
    e.preventDefault();
    router.push("withdraw_select");
  };
  return (
    <>
      <div>
        <DashboardNavbar />
        <div className="container" style={{ marginTop: "3rem" }}>
          <DashboardPageNavigator text="Referrals" />
          <div className="dashboard_">
            <div className="referral__wrap">
              <div className="col__1">
                <div className="refer__balance">
                  <span id="amt">$0.00</span>
                  <span id="refer_bal">Referral Balance</span>

                  <Button title="WITHDRAW" onClick={handleWithdraw} />
                </div>
                <div className="refer__link">
                  <input
                    type="text"
                    value={`https://${project_link}/signup.html?user_id=537`}
                    readOnly
                  />
                  <span>Referral Link</span>
                </div>
              </div>
              <div className="col__2">
                <div className="no__refer">No Referrals Yet</div>
              </div>
            </div>
          </div>
        </div>
        <BottomNavBar active="dashboard" />
      </div>
    </>
  );
};
export default Referrals;
