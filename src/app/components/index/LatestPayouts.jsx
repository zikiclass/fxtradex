"use client";
import React from "react";
import "./styles/latestpayouts.css";
import { payouts, testimonies } from "./data";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
const LatestPayouts = () => {
  return (
    <>
      <div className="container">
        <div className="payouts__row">
          <div className="col_payout_1">
            {testimonies.map((testimony) => (
              <Fade
                direction="up"
                key={testimony.id}
                triggerOnce
                style={{ flex: "0 0 50%" }}
              >
                <div className="testimony">
                  <Image
                    src={testimony.image}
                    alt={testimony.name}
                    className="img-testimony"
                  />
                  <span id="name">{testimony.name}</span>
                  <span id="comment">{testimony.comment}</span>
                </div>
              </Fade>
            ))}
          </div>
          <Fade direction="up" triggerOnce style={{ flex: "1.3" }}>
            <div className="col_payout_2">
              <h4>latest payouts</h4>

              {payouts.map((payout) => (
                <div className="payout" key={payout.id}>
                  <div id="box_wrapper">
                    <div
                      className="box"
                      style={{ backgroundColor: `${payout.color}` }}
                    ></div>
                    <span>{payout.text}</span>
                  </div>
                  <span>{payout.amount}</span>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default LatestPayouts;
