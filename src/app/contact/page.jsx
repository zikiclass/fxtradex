"use client";
import React, { useEffect, useRef } from "react";
import { Footer, NavBar } from "../HomeComponents";
import Banner from "../components/Banner";
import "../components/style1.css";
import ContactUsBanner from "../../../public/img/Hero5.jpg";
const Contact = () => {
  const refHandle = useRef();

  useEffect(() => {
    if (refHandle.current) {
      refHandle.current.classList.add("fadeIn");
    }
  }, []);

  return (
    <>
      <NavBar />
      <Banner text="Contact Us" smallText="" image={ContactUsBanner} />
      <div className="__section" ref={refHandle}>
        <div className="container">
          <form action="">
            <input type="text" placeholder="Your Name*" required />
            <input type="email" placeholder="Email Address*" required />
            <input type="number" placeholder="Phone Number*" required />
            <input type="text" placeholder="Subject*" required />
            <textarea placeholder="Your Message Here..." rows={5}></textarea>
            <div className="cta__contact">
              <button type="submit">
                <span>send message</span>
              </button>
              <span>
                <b>Note: </b>We promise that we don&apos;t do spam & your email
                address is confidential.
              </span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
