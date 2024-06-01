"use client";
import React, { useEffect, useRef } from "react";
import { Footer, NavBar } from "../HomeComponents";
import Banner from "../components/Banner";
import "../components/style1.css";
import CookieBanner from "../../../public/img/Hero3.jpg";
import { last_revised, project_name } from "../../../env";

const Cookie = () => {
  const refHandle = useRef();

  useEffect(() => {
    if (refHandle.current) {
      refHandle.current.classList.add("fadeIn");
    }
  }, []);

  return (
    <>
      <NavBar />
      <Banner
        text="Cookie Policy"
        smallText={`Last Revised: ${last_revised}`}
        image={CookieBanner}
      />
      <div className="__section" ref={refHandle}>
        <div className="container">
          <div className="content">
            <h1>Cookie Policy</h1>
            <p>
              {project_name} uses cookies to: Optimize your trading experience,
              including remembering your preferences, location, preferred
              language, browser and other details;
            </p>
            <p>Authenticate your identity for security purposes;</p>
            <p>Maintain our website and certain functions available on it;</p>
            <p>Analyze and track the use of our services;</p>
            <p>
              Adjust our platform according to your trading habits and our
              regulatory requirements.
            </p>

            <div className="content__paragraph">
              <h4>what are cookies</h4>
              <p>
                Cookies are tiny pieces of data that are sent to your computer
                by a website and stored on your computer. Cookies are
                non-executable and cannot be used to install malware. They allow
                websites to recognize visitors when they return and include
                basic information about them that is checked and updated every
                time you visit the website. For more information see:
                http://www.allaboutcookies.org/.
              </p>
            </div>
            <div className="content__paragraph">
              <h4>managing cookies</h4>
              <p>
                At {project_name}, we respect your right to privacy and are
                therefore happy to provide you with tools to manage the cookies
                you receive from our web services. Some cookies are essential to
                the performance of our platform (you cannot opt out from these
                cookies if you wish to use our platform). Below you will find a
                list of some of the third party cookies used by {project_name}.
                For those users who would prefer not to receive non-essential
                cookies, we have provided an “opt out” option for you to select.
              </p>
              <p>
                Your browser may also allow you to block the storage of cookies
                on your computer; please refer to your browser’s “Help” menu or
                website for more information. If you use our web services
                without blocking cookies you are actually consenting to the
                cookies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cookie;
