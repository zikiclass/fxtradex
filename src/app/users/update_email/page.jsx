"use client";

import Button from "../../components/Button";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
const UpdateEmail = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Update Email" />
        <div className="dashboard_">
          <div className="deposit">
            <h3>Update Email</h3>
            <div className="deposit__form">
              <form action="#">
                <p
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  rosafetrade@gmail.com
                </p>

                <div className="input__deposit prof_email">
                  <label>YOUR NEW EMAIL</label>
                  <input type="email" name="email" />
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

export default UpdateEmail;
