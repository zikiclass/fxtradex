"use client";
// components/admin/Login.js

import React, { useEffect, useRef } from "react";
import Logo from "../../../public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import "./signin.css";
import { AdminNav } from "../HomeComponents";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const loginFormRef = useRef(null);

  useEffect(() => {
    if (loginFormRef.current) {
      loginFormRef.current.classList.add("fadeIn");
    }
  }, []);

  const handleSignIn = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      const result = await signIn("credentials", {
        redirect: false,
        role: "admin",
        email: email.value,
        password: password.value,
      });

      if (result.error) {
        toast.error("Invalid login details.");
      } else {
        // Redirect manually upon successful login
        router.push("/admin/dashboard"); // Adjust to your admin dashboard path
      }
    } catch (error) {
      console.error("Sign in error:", error);
      toast.error("Sign in failed. Please try again.");
    }
  };

  return (
    <>
      <AdminNav />
      <Toaster position="bottom-left" />
      <div className="container" style={{ marginTop: "5rem!important" }}>
        <div ref={loginFormRef} className="login__wrap">
          <Link href="/">
            <Image src={Logo} alt="logo" className="logo" />
          </Link>

          <form className="form__login" onSubmit={handleSignIn}>
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
