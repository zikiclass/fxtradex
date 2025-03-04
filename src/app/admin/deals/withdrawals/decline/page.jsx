"use client";
import React, { useState, useEffect } from "react";
import Layout from "../../../Layout";
import styles from "../../../users/users.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import ReplyIcon from "@mui/icons-material/Reply";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
const DeclineWithdrawal = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const userId = searchParams.get("userId");
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "EEEE dd, MMMM yyyy hh:mm:ss a");
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/users/withdrawals/uniquewithdraw?id=${id}&mode=single`
        );
        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        toast.error("Error");
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  const handleApprove = async (event) => {
    event.preventDefault();
    try {
      const approve_ = await axios.put(
        "/api/users/withdrawals/uniquewithdraw",
        {
          id,
          action: "decline",
        }
      );
      if (approve_.data.message === "success") {
        toast.success("Transaction declined successfully");

        router.push(`/admin/deals/withdrawals?userId=${userId}`);
      } else {
        toast.error("An error occured");
      }
    } catch (error) {
      toast.error("An error occured");
    }
  };
  return (
    <Layout pageTitle="Approve Deposit">
      <div className={styles.wrapper}>
        <Link
          href={`/admin/deals/withdrawals?userId=${userId}`}
          className={styles.btnBack}
        >
          <ReplyIcon />
          Back
        </Link>
        <Toaster position="bottom-left" />
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.ctaWrap}>
            {users.length > 0 &&
              users.map((user, index) => (
                <div key={index}>
                  <h2
                    style={{
                      textTransform: "capitalize",
                      textAlign: "center",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                    }}
                  >
                    {user.method} payment
                  </h2>
                  <span>
                    <b>Amount: </b>
                    {user.amount}
                    <br />

                    {user.method === "bank" ? (
                      <span>
                        <b>Account Number: </b>
                        {user.account_number}
                        <br />
                        <b>Account Name: </b>
                        {user.account_name}
                        <br />
                        <b>Bank Name: </b>
                        {user.bank_name}
                      </span>
                    ) : user.method === "crypto" ? (
                      <span>
                        <b>Crypto: </b>
                        {user.crypto}
                        <br />
                        <b>Wallet Address: </b>
                        {user.wallet_address}
                      </span>
                    ) : user.method === "paypal" ? (
                      <span>
                        <b>PayPal Email: </b>
                        {user.paypal_email}
                      </span>
                    ) : (
                      user.method === "cashtag" && (
                        <span>
                          <b>Cash Tag: </b>
                          {user.cash_tag}
                        </span>
                      )
                    )}
                    <br />
                    <b>Date: </b>
                    {formatDate(user.date)}
                  </span>
                </div>
              ))}
            <p>Do you wish to decline this withdrawal?</p>
            <div className={styles.btnWrap}>
              <button
                className={styles.btnNo}
                onClick={() =>
                  router.push(`/admin/deals/withdrawals?userId=${userId}`)
                }
              >
                No
              </button>
              <button className={styles.btnDecline} onClick={handleApprove}>
                Yes
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DeclineWithdrawal;
