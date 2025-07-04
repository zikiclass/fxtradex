"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState, Suspense } from "react";
import "../dashboard/styles/dashboard.css";
import "../_components/styles/user.css";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import Button from "../../components/Button2";
import ButtonTransparent from "../../components/ButtonTransparent";
import axios from "axios";
const DepositWalletAddress = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <DepositWalletAddressContent />
      </Suspense>
    </>
  );
};

const DepositWalletAddressContent = () => {
  const [wallets, setWallets] = useState("");
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const paymethod = searchParams.get("paymethod");

  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState(3600);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(timer);
          // Optionally, redirect to the expired page
          // router.push('/expired-page');
        } else {
          localStorage.setItem("timeLeft", prevTimeLeft - 1); // Store updated timeLeft in localStorage
        }
        return prevTimeLeft > 0 ? prevTimeLeft - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/users/wallets?paymentmethod=${paymethod}`
        );

        if (response.data.wallets) {
          setWallets(response.data.wallets);
        } else {
        }
      } catch (error) {}
    };
    fetchData();
  }, [paymethod]);

  const initialTimeLeft =
    typeof window !== "undefined"
      ? localStorage.getItem("timeLeft") || 3600
      : 3600;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const showDepositList = (e) => {
    e.preventDefault();
    router.push(`deposit_list`);
  };
  const showPaymentProofUpload = (e) => {
    e.preventDefault();
    router.push(`upload_proof`);
  };
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Deposit" />
        <div className="dashboard_">
          {minutes <= 0 ? (
            <p>Invalid or Expired Payment Link</p>
          ) : (
            <div className="deposit">
              <form action="#" className="deposit__form__">
                <p style={{ textTransform: "uppercase" }}>
                  SEND{" "}
                  {Number(amount).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                  WORTH OF {paymethod}
                </p>
                <p style={{ textAlign: "center" }}>
                  TO THE WALLET ADDRESS BELOW OR SCAN THE QR CODE WITH YOUR
                  WALLET APP
                </p>
                <div className="input__deposit__">
                  <ContentCopyIcon id="icon" />
                  <input
                    type="text"
                    value={wallets.wallet}
                    placeholder="Wallet Address"
                    readOnly
                  />
                </div>

                <span className="span__dep">
                  {" "}
                  {minutes < 10 ? "0" + minutes : minutes}:
                  {seconds < 10 ? "0" + seconds : seconds}
                </span>
                <span className="span__dep" style={{ marginBottom: "1rem" }}>
                  Awaiting Payment
                </span>

                {/* <Button
                  title="UPLOAD PAYMENT PROOF"
                  onClick={showPaymentProofUpload}
                /> */}

                <ButtonTransparent
                  title="wait for confirmation"
                  onClick={showDepositList}
                />
              </form>
            </div>
          )}
        </div>
      </div>
      <BottomNavBar active="dashboard" />
    </div>
  );
};

export default DepositWalletAddress;
