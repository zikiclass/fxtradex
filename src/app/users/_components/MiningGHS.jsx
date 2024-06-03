"use client";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { min_ghs } from "../../components/index/data";
import Image from "next/image";
import "./styles/user.css";
const MiningGHS = () => {
  return (
    <>
      <div className="categories">
        <div className="favorites">
          {min_ghs.map((min_gh) => (
            <div className="favorite" key={min_gh.id}>
              <Image src={min_gh.svg} alt={min_gh.ghs} className="fav__img" />
              <div className="fav__content" style={{ color: "#777" }}>
                <span style={{ fontSize: "1rem" }}>{min_gh.crypto_amt}</span>
                <span style={{ fontSize: "15px" }}>{min_gh.dollar_amt}</span>
              </div>
              <span
                style={{
                  color: "#777",
                  fontSize: "13px",
                  width: "100%",
                  textAlign: "right",
                }}
              >
                {min_gh.ghs}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MiningGHS;
