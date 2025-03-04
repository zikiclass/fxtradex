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
import fetchUser from "../_components/FetchUser";
const AddressVerification = () => {
  const { data } = fetchUser();
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
                <b>City</b> <span>{data?.city}</span>
                <br />
                <b>State</b> <span>{data?.state}</span>
                <br />
                <b>Zip Code</b> <span>{data?.postal_code}</span>
                <br />
                <b>Country</b> <span>{data?.country}</span>
                <br />
                <b>Street Address</b> <span>{data?.street_address}</span>
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
