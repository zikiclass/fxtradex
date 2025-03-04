"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NavBarLight } from "../HomeComponents";
import PageNavigator from "../components/PageNavigator";
import { countries, currency } from "../components/index/data";
import "./signup.css";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { Callout, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { registerSchema } from "../validationSchemas";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const searchParams = useSearchParams();
  const referralId = searchParams.get("id");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const signupFormRef = useRef(null);

  useEffect(() => {
    if (signupFormRef.current) {
      signupFormRef.current.classList.add("fadeIn");
    }
  }, []);

  return (
    <>
      <NavBarLight />
      <div className="container">
        <PageNavigator text="Sign Up" />
        <div className="register__wrap">
          <h3>Sign Up</h3>
          <div className="register__form" ref={signupFormRef}>
            <form
              onSubmit={handleSubmit(async (data) => {
                try {
                  await axios.post("/api/register", { ...data, referralId });
                  toast.success("Account successfully registered");
                  router.push("/signin");
                } catch (error) {
                  toast.error(error.message);
                }
              })}
            >
              <Toaster position="bottom-left" />
              <div className="reg">
                <select name="accounttype" {...register("accounttype")}>
                  <option value="LIVE">LIVE</option>
                  <option value="DEMO">DEMO</option>
                </select>

                <label htmlFor="accountType">Account Type</label>
              </div>
              <div className="reg">
                <input type="email" name="email" {...register("email")} />
                <label htmlFor="email">Email</label>
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="reg">
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                />
                <label htmlFor="password">Password</label>
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <div className="reg">
                <input
                  type="password"
                  name="confirmPassword"
                  {...register("confirmPassword")}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                {errors.confirmPassword && (
                  <p>{errors.confirmPassword.message}</p>
                )}
              </div>
              <div className="reg">
                <input
                  type="text"
                  name="first_name"
                  {...register("first_name")}
                />
                <label htmlFor="firstName">First Name</label>
                {errors.first_name && <p>{errors.first_name.message}</p>}
              </div>
              <div className="reg">
                <input
                  type="text"
                  name="last_name"
                  {...register("last_name")}
                />
                <label htmlFor="lastName">Last Name</label>
                {errors.last_name && <p>{errors.last_name.message}</p>}
              </div>
              <div className="reg">
                <input type="number" name="mobile" {...register("mobile")} />
                <label htmlFor="phoneNumber">Mobile Number</label>
                {errors.mobile && <p>{errors.mobile.message}</p>}
              </div>
              <div className="reg">
                <select name="currency" {...register("currency")}>
                  {currency.map((curr) => (
                    <option value={curr.symbol} key={curr.value}>
                      {curr.value}
                    </option>
                  ))}
                </select>
                <label htmlFor="currency">Currency</label>
              </div>
              <div className="reg">
                <select name="country" {...register("country")}>
                  {countries.map((country) => (
                    <option value={country.name} key={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="country">Country</label>
              </div>
              <div className="reg">
                <input type="text" name="state" {...register("state")} />
                <label htmlFor="state">State</label>
                {errors.state && <p>{errors.state.message}</p>}
              </div>
              <div className="reg">
                <input type="text" name="city" {...register("city")} />
                <label htmlFor="city">City</label>
                {errors.city && <p>{errors.city.message}</p>}
              </div>

              <div className="terms__reg">
                <input type="checkbox" name="terms" required />
                <span>I accept all terms of service</span>
              </div>
              <div className="cta">
                <button type="submit">Create My Account</button>

                <p>
                  Already have an account?{" "}
                  <Link href="signin" style={{ color: "#6648fe" }}>
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;

// export const metadata: Metadata = {
//   title: "Sign Up - " + project_name,
//   description:
//     "Forex, Stocks, ETFs and Options | " +
//     project_name +
//     " - Online Trading Platform",
// };
