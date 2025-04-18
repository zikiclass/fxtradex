"use client";

import Button from "../../components/Button";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
import camera from "../../../../public/img/camera.png";
import Image from "next/image";
import fetchUser from "../_components/FetchUser";
const MyProfile = () => {
  const { data } = fetchUser();
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="My Profile" />
        <div className="dashboard_">
          <div className="deposit">
            <div className="deposit__form__">
              <div className="profile__pic__wrap">
                <Image
                  src={camera}
                  className="profile__pic"
                  alt="profile pic"
                />
              </div>

              <table>
                <tbody>
                  <tr className="trcl">
                    <td>EMAIL</td>
                    <td>{data?.email || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>MOBILE NUMBER</td>
                    <td>{data?.mobile || "N/A"}</td>
                  </tr>
                  <tr className="trcl">
                    <td>FIRST NAME</td>
                    <td>{data?.first_name || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>LAST NAME</td>
                    <td>{data?.last_name || "N/A"}</td>
                  </tr>
                  <tr className="trcl">
                    <td>STREET ADDRESS</td>
                    <td>{data?.street_address || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>POST CODE</td>
                    <td>{data?.postal_code || "N/A"}</td>
                  </tr>
                  <tr className="trcl">
                    <td>CITY</td>
                    <td>{data?.city || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>STATE</td>
                    <td>{data?.state || "N/A"}</td>
                  </tr>
                  <tr className="trcl">
                    <td>COUNTRY</td>
                    <td>{data?.country || "N/A"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar active="profile" />
    </div>
  );
};

export default MyProfile;
