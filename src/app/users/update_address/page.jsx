"use client";

import Button from "../../components/Button";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
const UpdateAddress = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Update Address" />
        <div className="dashboard_">
          <div className="deposit">
            <h3>Update Address</h3>
            <div className="deposit__form notifications">
              <form action="#">
                <div className="input__deposit prof_email">
                  <label>Street Address</label>
                  <input type="text" name="street_address" />
                </div>
                <div className="input__deposit prof_email">
                  <label>Zip Code</label>
                  <input type="text" name="zip_code" />
                </div>
                <div className="input__deposit prof_email">
                  <label>City</label>
                  <input type="text" name="city" value="Delaware" />
                </div>
                <div className="input__deposit prof_email">
                  <label>State</label>
                  <input type="text" name="state" value="Lovey" />
                </div>
                <div className="input__deposit prof_email">
                  <label>Country</label>
                  <input type="text" name="state" value="Lovey" />
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
