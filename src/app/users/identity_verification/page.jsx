"use client";

import Button from "../../components/Button";
import ButtonTransparent from "../../components/ButtonTransparent";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/joy/CircularProgress";
const IdentityVerification = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const router = useRouter();
  const handleProceed = (e) => {
    e.preventDefault();
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 2000);
    router.push(`dashboard`);
  };
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Update Email" />
        <div className="dashboard_">
          <div className="deposit">
            <div className="deposit__form" style={{ width: "500px" }}>
              <h3 style={{ color: "var(--primary-color)" }}>
                Verify Your Identity
              </h3>
              <p
                style={{
                  marginTop: "10px",
                }}
              >
                Please verify your identity by uploading a valid government
                issued identification card. You may experience difficulties when
                uploading from an ios device. Make sure your browser has camera
                access in your ios settings.{" "}
              </p>
              <div className="input__deposit">
                <label>Select Front</label>
                <input type="file" name="photo__front" />
              </div>
              <div className="input__deposit">
                <label>Select Back</label>
                <input type="file" name="photo__back" />
              </div>
              <Button title="Upload" />
              <br />
              {!buttonClicked ? (
                <ButtonTransparent title="Skip" onClick={handleProceed} />
              ) : (
                <center
                  style={{
                    padding: "0px",
                  }}
                >
                  <CircularProgress thickness={4} />
                </center>
              )}
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar active="profile" />
    </div>
  );
};

export default IdentityVerification;
