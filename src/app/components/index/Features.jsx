"use client";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import { features } from "./data";
import "./styles/features.css";
const Features = () => {
  return (
    <>
      <div className="container features__container">
        {features.map((feature) => (
          <Slide direction="up" triggerOnce key={feature.id}>
            <div className="feature__card">
              <Image src={feature.image} alt="Feature 1" />
              <h4>{feature.heading}</h4>
              <p>{feature.paragraph}</p>
            </div>
          </Slide>
        ))}
      </div>
    </>
  );
};

export default Features;
