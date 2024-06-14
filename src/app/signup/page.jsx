"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { NavBarLight } from "../HomeComponents";
import PageNavigator from "../components/PageNavigator";
import { countries, currency } from "../components/index/data";
import "./signup.css";
const Register = () => {
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
            <form>
              <div className="reg">
                <select name="accountType">
                  <option value="LIVE">LIVE</option>
                  <option value="DEMO">DEMO</option>
                </select>
                <label htmlFor="accountType">Account Type</label>
              </div>
              <div className="reg">
                <input type="email" name="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="reg">
                <input type="password" name="password" required />
                <label htmlFor="password">Password</label>
              </div>
              <div className="reg">
                <input type="password" name="confirmPassword" required />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
              <div className="reg">
                <input type="text" name="firstName" required />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="reg">
                <input type="text" name="lastName" required />
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="reg">
                <input type="number" name="phoneNumber" required />
                <label htmlFor="phoneNumber">Mobile Number</label>
              </div>
              <div className="reg">
                <select name="currency">
                  {currency.map((curr) => (
                    <option value={curr.value} key={curr.value}>
                      {curr.value}
                    </option>
                  ))}
                </select>
                <label htmlFor="currency">Currency</label>
              </div>
              <div className="reg">
                <select name="country">
                  {countries.map((country) => (
                    <option value={country.name} key={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="country">Country</label>
              </div>
              <div className="reg">
                <input type="text" name="state" required />
                <label htmlFor="state">State</label>
              </div>
              <div className="reg">
                <input type="text" name="city" required />
                <label htmlFor="city">City</label>
              </div>

              <div className="terms__reg">
                <input type="checkbox" name="terms" />
                <span>I accept all terms of service</span>
              </div>
              <div className="cta">
                <button type="submit">Create My Account</button>

                <p>
                  Already have an account?{" "}
                  <Link href="login" style={{ color: "#6648fe" }}>
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
