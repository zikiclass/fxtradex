"use client";
import React from "react";
import "../_components/styles/user.css";
import camera from "../../../../public/img/camera.png";
import Image from "next/image";
import SavingsIcon from "@mui/icons-material/Savings";
import PaymentsIcon from "@mui/icons-material/Payments";
import GroupsIcon from "@mui/icons-material/Groups";
import { useRouter } from "next/navigation";
import StarIcon from "@mui/icons-material/Star";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { DashboardNavbar } from "../../HomeComponents";
import Link from "next/link";
import BottomNavBar from "../_components/BottomNavBar";
import fetchUser from "../_components/FetchUser";
import { signOut } from "next-auth/react";
const Profile = () => {
  const { data } = fetchUser();
  const router = useRouter();
  const profile1 = [
    {
      id: 1,
      icon: <SavingsIcon style={{ fontSize: 30 }} />,
      color: "#32a7e2",
      title: "Deposits",
      href: "deposit_list",
    },
    {
      id: 2,
      icon: <PaymentsIcon style={{ fontSize: 30 }} />,
      color: "#b548c6",
      title: "Withdrawals",
      href: "withdrawal_list",
    },
    {
      id: 3,
      icon: <GroupsIcon style={{ fontSize: 30 }} />,
      color: "#e1545d",
      title: "Referrals",
      href: "referrals",
    },
  ];
  const profile2 = [
    {
      id: 1,
      icon: <StarIcon style={{ fontSize: 30 }} />,
      color: "#ff8700",
      title: "Watch List",
      href: "watch_list",
    },
    {
      id: 2,
      icon: <EmailIcon style={{ fontSize: 30 }} />,
      color: "#008001",
      title: "Update Email",
      href: "update_email",
    },
    {
      id: 3,
      icon: <AccountCircleIcon style={{ fontSize: 30 }} />,
      color: "#b548c6",
      title: "Update Photo",
      href: "update_photo",
    },
    {
      id: 4,
      icon: <LockIcon style={{ fontSize: 30 }} />,
      color: "#32a7e2",
      title: "Update Password",
      href: "update_password",
    },
    {
      id: 5,
      icon: <SettingsIcon style={{ fontSize: 30 }} />,
      color: "#b548c6",
      title: "Account Settings",
      href: "account_settings",
    },
  ];
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false, callbackUrl: "/" });
      router.push("/api/auth/signin");
    } catch (err) {
      console.error("Sign-out error:", err);
    }
  };
  return (
    <>
      <DashboardNavbar />
      <div className="container">
        <div className="profile">
          <div className="profile__col">
            <div className="profile__pic__wrap">
              <Image src={camera} className="profile__pic" alt="profile pic" />
              <span>{data?.first_name || ""}</span>
            </div>
            <div className="profile__listings">
              {profile1.map((profile) => (
                <Link
                  href={profile.href}
                  className="profile_list"
                  key={profile.id}
                >
                  <div
                    className="list__icon"
                    style={{ backgroundColor: `${profile.color}` }}
                  >
                    {profile.icon}
                  </div>
                  <span>{profile.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="profile__col">
            <div className="profile__listings">
              {profile2.map((profile2) => (
                <Link
                  href={profile2.href}
                  className="profile_list"
                  key={profile2.id}
                >
                  <div
                    className="list__icon"
                    style={{ backgroundColor: `${profile2.color}` }}
                  >
                    {profile2.icon}
                  </div>
                  <span>{profile2.title}</span>
                </Link>
              ))}

              <div
                onClick={handleSignOut}
                className="profile_list"
                style={{ cursor: "pointer" }}
              >
                <div
                  className="list__icon"
                  style={{ backgroundColor: "#b548c6" }}
                >
                  <LogoutIcon style={{ fontSize: 30 }} />
                </div>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar active="profile" />
    </>
  );
};
export default Profile;
