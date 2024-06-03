"use client";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TokenIcon from "@mui/icons-material/Token";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import WalletIcon from "@mui/icons-material/Wallet";
import Link from "next/link";
import "./styles/user.css";
const BottomNavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navbars = [
    { id: 1, icon: HomeIcon, title: "Home", href: "users" },
    { id: 2, icon: TokenIcon, title: "Mining", href: "mining" },
    { id: 3, icon: InsertChartIcon, title: "Markets", href: "/" },
    { id: 4, icon: BrowseGalleryIcon, title: "Trade", href: "/" },
    { id: 5, icon: HistoryEduIcon, title: "Trades", href: "/" },
    { id: 6, icon: WalletIcon, title: "Profile", href: "/" },
  ];
  const handleClick = (index) => {
    setActiveIndex(index);
    console.log(index);
  };
  return (
    <>
      <div className="bottom__nav">
        {navbars.map((nav, index) => (
          <Link href={nav.href} key={nav.id} onClick={() => handleClick(index)}>
            <div
              className={`bottom_nav_links ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <nav.icon className="bottom_nav_icon" />
              <span>{nav.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default BottomNavBar;
