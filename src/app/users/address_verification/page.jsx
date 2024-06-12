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
const AddressVerification = () => {
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
              <h3>Address Verification</h3>
              <p
                style={{
                  marginTop: "10px",
                }}
              >
                <b>City</b> <span>Delaware</span>
                <br />
                <b>State</b> <span>Lovey</span>
                <br />
                <b>Zip Code</b> <span></span>
                <br />
                <b>Country</b> <span>AZ</span>
                <br />
                <b>Street Address</b> <span></span>
                <br />
              </p>
              <div className="input__deposit">
                <label>Select Bill</label>
                <input type="file" name="photo__bill" />
              </div>

              <Button title="Submit" />
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

export default AddressVerification;
