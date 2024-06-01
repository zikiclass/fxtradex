"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Button from "../Button";
import { offerList } from "./data";
import "./styles/whatweoffer.css";
const WhatWeOffer = () => {
  return (
    <>
      <div className="container">
        <div className="heading">
          <h3>What we offer</h3>
          <p className="text-center">
            We’re building a new standard for trading and mining. One account
            with streamlined access to <br />
            multiple liquidity venues.
          </p>
        </div>
        <div className="cards">
          {offerList.map((offer) => (
            <Fade direction="up" triggerOnce key={offer.id}>
              <div className="card">
                <Image
                  src={offer.img}
                  alt="Crypto Trading"
                  style={{ width: "100%", height: "250px" }}
                />
                <div className="card__content">
                  <h4>{offer.heading}</h4>
                  <p className="text-gray-500">{offer.paragraph}</p>
                  <Button href={offer.link} title="Learn More"></Button>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};
export default WhatWeOffer;
