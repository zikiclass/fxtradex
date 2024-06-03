"use client";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { favorites } from "../../components/index/data";
import Link from "next/link";
import Image from "next/image";
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
        <div className="favorites">
          {favorites.map((favorite) => (
            <div className="favorite" key={favorite.id}>
              <Image
                src={favorite.svg}
                alt={favorite.name}
                className="fav__img"
              />
              <div className="fav__content">
                <span>{favorite.name}</span>
                <span>{favorite.desc}</span>
              </div>
              <StarIcon className="fav__icon" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
