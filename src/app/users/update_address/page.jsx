"use client";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
import { useRouter } from "next/navigation";
import fetchUser from "../_components/FetchUser";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const UpdateAddress = () => {
  const router = useRouter();
  const { data } = fetchUser();
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  // Update state when `data` changes
  useEffect(() => {
    if (data) {
      setStreetAddress(data.street_address || "");
      setPostalCode(data.postal_code || "");
      setCity(data.city || "");
      setState(data.state || "");
      setCountry(data.country || "");
    }
  }, [data]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put("/api/users/address", {
        streetAddress,
        postalCode,
        city,
        state,
        country,
      });
      if (response.data === "Address updated successfully") {
        toast.success(response.data);
        router.push("/users/myprofile");
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(response.data.error || "An error occurred");
    }
  };
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Update Address" />
        <div className="dashboard_">
          <div className="deposit">
            <h3>Update Address</h3>
            <div className="deposit__form notifications">
              <Toaster position="bottom-left" />
              <form action="#" onSubmit={handleUpdate}>
                <div className="input__deposit prof_email">
                  <label>Street Address</label>
                  <input
                    type="text"
                    name="street_address"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="input__deposit prof_email">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    name="zip_code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                  />
                </div>
                <div className="input__deposit prof_email">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="input__deposit prof_email">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
                <div className="input__deposit prof_email">
                  <label>Country</label>
                  <input
                    type="text"
                    name="state"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
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

export default UpdateAddress;
