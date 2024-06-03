import React from "react";
import "../users/_components/styles/user.css";
import camera from "../../../public/img/camera.png";
import Image from "next/image";
import SavingsIcon from "@mui/icons-material/Savings";
import PaymentsIcon from "@mui/icons-material/Payments";
import GroupsIcon from "@mui/icons-material/Groups";

import StarIcon from "@mui/icons-material/Star";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavBarLight } from "../HomeComponents";
import Link from "next/link";
import BottomNavBar from "../users/_components/BottomNavBar";
const Profile = () => {
  const profile1 = [
    {
      id: 1,
      icon: SavingsIcon,
      color: "#32a7e2",
      title: "Deposits",
      href: "/",
    },
    {
      id: 2,
      icon: PaymentsIcon,
      color: "#b548c6",
      title: "Withdrawals",
      href: "/",
    },
    {
      id: 3,
      icon: GroupsIcon,
      color: "#e1545d",
      title: "Referrals",
      href: "/",
    },
  ];
  const profile2 = [
    { id: 1, icon: StarIcon, color: "#ff8700", title: "Watch List", href: "/" },
    {
      id: 2,
      icon: EmailIcon,
      color: "#008001",
      title: "Update Email",
      href: "/",
    },
    {
      id: 3,
      icon: AccountCircleIcon,
      color: "#b548c6",
      title: "Update Photo",
      href: "/",
    },
    {
      id: 4,
      icon: LockIcon,
      color: "#32a7e2",
      title: "Update Password",
      href: "/",
    },
    {
      id: 5,
      icon: SettingsIcon,
      color: "#b548c6",
      title: "Account Settings",
      href: "/",
    },
    { id: 6, icon: LogoutIcon, color: "#32a7e2", title: "Logout", href: "/" },
  ];
  return (
    <>
      <NavBarLight />
      <div className="container">
        <div className="profile">
          <div className="profile__col">
            <div className="profile__pic__wrap">
              <Image src={camera} className="profile__pic" alt="profile pic" />
              <span>Rosafe Berl</span>
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
                    <profile.icon />
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
                    <profile2.icon />
                  </div>
                  <span>{profile2.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar active="profile" />
    </>
  );
};
export default Profile;
