"use client";
import { useState } from "react";
import Button from "../../components/Button";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
import fetchUser from "../_components/FetchUser";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signOut } from "next-auth/react";
const UpdateEmail = () => {
  const router = useRouter();
  const { data } = fetchUser();
  const [email, setEmail] = useState("");
  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const updateEmail = await axios.put("/api/users/email", { email });
      if (updateEmail) {
        if (updateEmail !== "updated") {
          toast.success("Email updated successfully " + email);

          await signOut({ redirect: false, callbackUrl: "/" });
          router.push("/api/auth/signout");
        }
      } else {
        toast.error("Unable to update email");
      }
    } catch (error) {
      if (error.request) {
        // The request was made but no response was received
        toast.error("Email already exists");
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("Error: " + error.message);
      }
    }
  };
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Update Email" />
        <div className="dashboard_">
          <div className="deposit">
            <h3>Update Email</h3>
            <div className="deposit__form">
              <Toaster position="bottom-left" />
              <form action="#" onSubmit={handleUpdate}>
                <p
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  {data.email}
                </p>

                <div className="input__deposit prof_email">
                  <label>YOUR NEW EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
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

export default UpdateEmail;
