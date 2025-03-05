"use client";
import React, { useState, useEffect } from "react";
import "./styles/carousel.css";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Slider = ({ project_title }) => {
  const slides = [
    {
      src: "/img/BgForex.jpg",
      title: `Welcome to ${project_title}`,
      description:
        "Start making profit today by Trading Crypto Currencies, Trading Forex, Stocks or Binary Options.",
      buttonLink: "signup",
    },
    {
      src: "/img/BgStocks2.jpg",
      title: "Trade Stocks",
      description:
        "Trade stocks or make long-term investments on the same platform",
      buttonLink: "signup",
    },
    {
      src: "/img/BgTrader.jpg",
      title: "Trade Forex",
      description: `Trade forex on the ${project_title} platform and enjoy reliable pricing and exceptional execution`,
      buttonLink: "signup",
    },
    {
      src: "/img/Crypto4.jpeg",
      title: "Copy Expert Traders",
      description:
        "Select from a list of expert traders, and automatically copy their trades without having to watch the market yourself.",
      buttonLink: "signup",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slides.length]); // Include slides.length in the dependencies

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(33, 5, 172, 0.7), rgba(205, 12, 134, 0.6)), url(${slide.src})`,
            opacity: index === currentIndex ? 1 : 0, // Hide inactive slides
            pointerEvents: index === currentIndex ? "auto" : "none", // Disable interaction for inactive slides
            transition: "opacity 1s ease-in-out", // Smooth transition for opacity
          }}
        >
          {index === currentIndex && (
            <div className="carousel__label-wrapper">
              <div className="carousel__label">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                {/* Render the button and link with correct behavior */}
                <Link href={slide.buttonLink} passHref>
                  <Button as="a">Get Started</Button>{" "}
                  {/* Make the button behave like an anchor */}
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
