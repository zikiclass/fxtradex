"use client";

import Button from "../../components/Button";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
const EmailVerification = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Update Email" />
        <div className="dashboard_">
          <div className="deposit">
            <div className="deposit__form" style={{ width: "500px" }}>
              <h3 style={{ color: "var(--primary-color)" }}>
                Email Verification
              </h3>
              <p
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                An email containing your 5-digit PIN has been sent to your email
                If you have not received it in a minute or two, click ‘Resend’.
              </p>

              <div className="input__deposit prof_email">
                <label>Pin</label>
                <input
                  type="text"
                  name="pin"
                  style={{ marginBottom: "1.2rem" }}
                />
              </div>

              <Button title="VERIFY EMAIL" />
              <div
                className="input__deposit prof_email"
                style={{ marginTop: "2rem" }}
              >
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  style={{ marginBottom: "1.2rem" }}
                />
              </div>

              <Button title="RESEND PIN" />
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar active="profile" />
    </div>
  );
};

export default EmailVerification;
