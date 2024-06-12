"use client";

import Button from "../../components/Button";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
const UpdatePassword = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Update Email" />
        <div className="dashboard_">
          <div className="deposit">
            <h3>Update Password</h3>
            <div className="deposit__form">
              <form action="#">
                <div className="input__deposit prof_email">
                  <label>Password</label>
                  <input type="password" name="password" />
                </div>
                <div className="input__deposit prof_email">
                  <label>New Password</label>
                  <input type="password" name="new__password" />
                </div>
                <div className="input__deposit prof_email">
                  <label>Confirm Password</label>
                  <input type="password" name="confirm__password" />
                </div>

                <Button title="UPDATE" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar active="profile" />
    </div>
  );
};

export default UpdatePassword;
