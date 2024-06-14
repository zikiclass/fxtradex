"use client";
import "./admin.css";
import Logo from "../../../../public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AdjustIcon from "@mui/icons-material/Adjust";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { project_name, project_link } from "../../../../env";
import React, { useEffect, useState } from "react";

const SideBar = ({ toggle }) => {
  const [activeLink, setActiveLink] = useState("dashboard");

  const handleLink = (data) => {
    setActiveLink(data);
  };

  const linkLists = [
    { title: "dashboard", icon: <DashboardIcon />, subLink: [] },
    {
      title: "accounts",
      icon: <PersonIcon />,
      sub: "accounts",
      subLink: [
        { title: "users", href: "/" },
        { title: "admin", href: "/" },
      ],
    },
    {
      title: "transactions",
      icon: <AccountBalanceWalletIcon />,
      sub: "transactions",
      subLink: [
        { title: "deposits", href: "/" },
        { title: "withdrawals", href: "/" },
      ],
    },
    { title: "traders", icon: <Diversity2Icon /> },
    { title: "trades", icon: <CurrencyExchangeIcon /> },
    {
      title: "settings",
      icon: <SettingsIcon />,
      sub: "settings",
      subLink: [
        { title: "favorites", href: "/" },
        { title: "gainers", href: "/" },
        { title: "losers", href: "/" },
        { title: "accounts", href: "/" },
        { title: "wallet address", href: "/" },
      ],
    },
    { title: "logout", icon: <ExitToAppIcon /> },
  ];

  return (
    <div className={toggle ? `ad__sidebar` : `ad__sidebar hide`}>
      <div className="sidebar__top">
        <Link href="dashboard">
          <Image src={Logo} alt="Logo" className="ad_logo" />
        </Link>
        <div className="sidebar__top__bottom">
          <div>
            <span>{project_name}</span>
            <small>{project_link}</small>
          </div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <ul className="sidebar__links">
          {linkLists.map((linkList) => (
            <li onClick={() => handleLink(`${linkList.title}`)}>
              <div
                className={`link ${
                  activeLink === `${linkList.title}` && "active"
                }`}
              >
                <div className="ad__link__main">
                  {linkList.icon} <span>{linkList.title}</span>
                </div>

                {linkList.sub &&
                  (activeLink === linkList.title ? (
                    <ArrowDropDownIcon className="arrow" />
                  ) : (
                    <PlayArrowIcon
                      style={{ fontSize: "13px" }}
                      className="arrow"
                    />
                  ))}
              </div>
              {linkList.sub && (
                <ul
                  className={`${
                    activeLink === `${linkList.title}` && "reveal"
                  }`}
                >
                  {linkList.subLink.map((sublink) => (
                    <li key={sublink.title}>
                      <Link href={sublink.href} className="sublink">
                        <AdjustIcon
                          style={{ fontSize: "14px" }}
                          className="hideSublink"
                        />
                        <span>{sublink.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
