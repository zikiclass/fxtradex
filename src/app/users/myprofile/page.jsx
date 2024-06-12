"use client";

import Button from "../../components/Button";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
import camera from "../../../../public/img/camera.png";
import Image from "next/image";
const MyProfile = () => {
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
                    <td>rosafetrade@gmail.com</td>
                  </tr>
                  <tr>
                    <td>MOBILE NUMBER</td>
                    <td>908377738</td>
                  </tr>
                  <tr className="trcl">
                    <td>FIRST NAME</td>
                    <td>Rosafe</td>
                  </tr>
                  <tr>
                    <td>LAST NAME</td>
                    <td>Berl</td>
                  </tr>
                  <tr className="trcl">
                    <td>STREET ADDRESS</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>POST CODE</td>
                    <td></td>
                  </tr>
                  <tr className="trcl">
                    <td>CITY</td>
                    <td>Delaware</td>
                  </tr>
                  <tr>
                    <td>STATE</td>
                    <td>Lovey</td>
                  </tr>
                  <tr className="trcl">
                    <td>COUNTRY</td>
                    <td>AZ</td>
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
