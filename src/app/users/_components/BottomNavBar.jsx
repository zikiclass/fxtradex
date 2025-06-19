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
const BottomNavBar = ({ active }) => {
  const [activeIndex, setActiveIndex] = useState(active);
  const navbars = [
    { id: 1, icon: HomeIcon, title: "Home", href: "dashboard" },
    { id: 2, icon: WalletIcon, title: "Profile", href: "profile" },
    { id: 3, icon: TokenIcon, title: "Mining", href: "mining" },
    { id: 4, icon: InsertChartIcon, title: "Markets", href: "markets" },
    { id: 5, icon: BrowseGalleryIcon, title: "Trade", href: "trade" },
    { id: 6, icon: HistoryEduIcon, title: "Trades", href: "trades" },
  ];
  const handleClick = (href) => {
    if (activeIndex === href) return;
    setActiveIndex(href);
  };
  return (
    <>
      <div className="bottom__nav">
        {navbars.map((nav, index) => (
          <Link
            href={nav.href}
            key={nav.id}
            onClick={() => handleClick(nav.href)}
          >
            <div
              className={`bottom_nav_links ${
                activeIndex === nav.href ? "active" : ""
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
