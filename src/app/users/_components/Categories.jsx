"use client";
import React from "react";
import Link from "next/link";
import WatchLists from "./WatchLists";
import "./styles/user.css";
const Categories = () => {
  return (
    <>
      <div className="categories">
        <ul>
          <li className="active">
            <Link href="/">Favorites</Link>
          </li>
          <li>
            <Link href="/">Gainers</Link>
          </li>
          <li>
            <Link href="/">Losers</Link>
          </li>
        </ul>
        <WatchLists />
      </div>
    </>
  );
};

export default Categories;
