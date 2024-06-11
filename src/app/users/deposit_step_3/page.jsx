"use client";
import CircularProgress from "@mui/joy/CircularProgress";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import DashboardPageNavigator from "../../components/DashboardPageNavigator";
import { DashboardNavbar } from "../../HomeComponents";
import BottomNavBar from "../_components/BottomNavBar";
import "../_components/styles/user.css";
import "../dashboard/styles/dashboard.css";
const DepositStep3 = () => {
  const dashboardRef = useRef(null);

  useEffect(() => {
    if (dashboardRef.current) {
      dashboardRef.current.classList.add("fadeIn");
    }
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <DepositStep3Content />
      </Suspense>
    </>
  );
};

const DepositStep3Content = () => {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const amountUSD = parseFloat(searchParams.get("amount"));
  const [buttonClicked, setButtonClicked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("BTC Bitcoin");
  const router = useRouter();
  const [btcEquivalent, setBtcEquivalent] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleProceed = (e) => {
    e.preventDefault();
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 2000);
    router.push(
      `deposit_wallet_address?amount=${amount}&paymethod=${paymentMethod}`
    );
  };

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await response.json();
        const exchangeRate = data.bitcoin.usd;
        if (!isNaN(exchangeRate)) {
          const btcEquivalentAmount = amountUSD / exchangeRate;
          setBtcEquivalent(btcEquivalentAmount.toFixed(8));
        } else {
          console.error("Invalid exchange rate:", exchangeRate);
        }
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [amountUSD]);
  return (
    <div>
      <DashboardNavbar />
      <div className="container" style={{ marginTop: "3rem" }}>
        <DashboardPageNavigator text="Deposit" />
        <div className="dashboard_" ref={dashboardRef}>
          <div className="deposit">
            <h2>
              PAY{" "}
              {Number(amount).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h2>
            <p style={{ marginTop: "-20px" }}>Send Crypto</p>
            <div className="deposit__form">
              <center>
                <label>
                  {loading
                    ? "Loading..."
                    : btcEquivalent !== null && !isNaN(btcEquivalent)
                    ? parseFloat(btcEquivalent).toFixed(8)
                    : "N/A"}{" "}
                  BTC
                </label>
              </center>
              <form action="#" onSubmit={handleProceed}>
                <div className="input__deposit">
                  <label>Select Payment Method</label>
                  <select
                    className="select__deposit"
                    name="paymentMethod"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="BTC Bitcoin" selected="">
                      BTC Bitcoin
                    </option>
                    <option value="ETH Ethereum">ETH Ethereum </option>
                    <option value="USDT Usdt(trc20)">USDT Usdt(trc20) </option>
                    <option value="USDT Usdt(erc20)">USDT Usdt(erc20) </option>
                    <option value="TRX Trx(tron)">TRX Trx(tron) </option>
                    <option value="PIX Elzimar medeiros de jesus ribeiro Nubank">
                      PIX Elzimar medeiros de jesus ribeiro Nubank
                    </option>
                    <option value="PIXX Inter banco">PIXX Inter banco </option>
                    <option value="PIXX Mercado pago elzimar medeiros de jesus ribeiro">
                      PIXX Mercado pago elzimar medeiros de jesus ribeiro{" "}
                    </option>
                    <option value="PIXXX Sandra aparecida gagetti Chave BV">
                      PIXXX Sandra aparecida gagetti Chave BV
                    </option>
                  </select>
                </div>
                {!buttonClicked ? (
                  <Button title="Proceed" />
                ) : (
                  <center
                    style={{
                      padding: "0px",
                    }}
                  >
                    <CircularProgress thickness={4} />
                  </center>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar active="dashboard" />
    </div>
  );
};

export default DepositStep3;
