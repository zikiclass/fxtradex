"use client";
// Login component
import React, { useEffect, useRef } from "react";
import Logo from "../../../public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import "./signin.css";

const Login = () => {
  const loginFormRef = useRef(null);

  useEffect(() => {
    if (loginFormRef.current) {
      loginFormRef.current.classList.add("fadeIn");
    }
  }, []);

  return (
    <>
      <div className="container">
        <div ref={loginFormRef} className="login__wrap">
          <Link href="/">
            <Image src={Logo} alt="logo" className="logo" />
          </Link>

          <form className="form__login" action="">
            <div className="input">
              <EmailIcon className="icon" />
              <input type="email" name="email" required />
              <label>Email</label>
            </div>
            <div className="input">
              <KeyIcon className="icon" />
              <input type="password" name="password" required />
              <label>Password</label>
            </div>
            <div className="cta">
              <button type="submit">Sign In</button>
              <Link className="links" href="forgot">
                Forgot Password?
              </Link>
              <p>
                Don&apos;t have an account?{" "}
                <Link className="links" href="signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
