"use client";
import React, { useState } from "react";
import Button from "../../components/Button";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
const UpdatePassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/users/password", {
        password,
        newPassword,
        confirmPassword,
      });

      if (response.data === "Password updated") {
        toast.success("Password updated successfully");
        await signOut({ redirect: false, callbackUrl: "/" });
        router.push("/api/auth/signout");
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error("Error updating password: " + error.message);
    }
  };
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Update Email" />
        <div className="dashboard_">
          <div className="deposit">
            <h3>Update Password</h3>
            <div className="deposit__form">
              <Toaster position="bottom-left" />
              <form action="#" onSubmit={handleUpdate}>
                <div className="input__deposit prof_email">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input__deposit prof_email">
                  <label>New Password</label>
                  <input
                    type="password"
                    name="new__password"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="input__deposit prof_email">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirm__password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
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

export default UpdatePassword;
