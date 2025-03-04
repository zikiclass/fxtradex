"use client";
// Login component
import React, { useEffect, useRef } from "react";
import Logo from "../../../public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import "./signin.css";
import { NavBarLight } from "../HomeComponents";
import google from "../../../public/img/google.svg";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import fetchUser from "../users/_components/FetchUser";
const Login = () => {
  const { data } = fetchUser();
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
        role: "user",
        email: email.value,
        password: password.value,
      });

      if (result.error) {
        toast.error("Invalid login details.");
      } else {
        // Redirect manually upon successful login

        router.push("/users/dashboard");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      toast.error("Sign in failed. Please try again.");
    }
  };

  return (
    <>
      <NavBarLight />
      <Toaster position="bottom-left" />
      <div className="container">
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
              <Link className="links" href="forgot">
                Forgot Password?
              </Link>

              <p className="ctaP">
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
