"use client";
import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import styles from "../../users/users.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ReplyIcon from "@mui/icons-material/Reply";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import Box from "@mui/material/Box";
import { format, parseISO } from "date-fns";

// Custom hook to fetch search params
const useSearchParamsWithSuspense = () => {
  const searchParams = useSearchParams();
  const [params, setParams] = useState(null);

  useEffect(() => {
    if (searchParams) {
      setParams(searchParams); // Set the params when available
    }
  }, [searchParams]);

  return params;
};

const DealsWithdrawalsContent = () => {
  const searchParams = useSearchParamsWithSuspense(); // This hook now simply gets params
  const userId = searchParams ? searchParams.get("userId") : null;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `/api/users/withdrawals/uniquewithdraw?id=${userId}`
          );
          setUsers(response.data.data);
          setLoading(false);
        } catch (error) {
          toast.error("Error fetching data");
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [userId]);

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "EEEE dd, MMMM yyyy hh:mm:ss a");
  };

  return (
    <Layout pageTitle="Transactions">
      <Toaster position="bottom-left" />
      <div className={styles.wrapper}>
        <Link href="/admin/users" className={styles.btnBack}>
          <ReplyIcon />
          Back
        </Link>
        <Link href={`/admin/deals?userId=${userId}`} className={styles.btnTop}>
          <MonetizationOnIcon />
          Deposits
        </Link>
        <Link
          href={`/admin/deals/withdrawals?userId=${userId}`}
          className={styles.btnTopActive}
        >
          <IndeterminateCheckBoxIcon />
          Withdrawals
        </Link>
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
          <>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {users.length > 0 ? (
                <tbody className={styles.tbody}>
                  {users.map((user, index) => (
                    <tr key={index} className={styles.tr}>
                      <td>{formatDate(user.date)}</td>
                      <td>{user.amount}</td>
                      <td style={{ textTransform: "uppercase" }}>
                        {user.method}
                      </td>
                      <td>
                        {user.status === "Pending" ? (
                          <span className={styles.danger}>Pending</span>
                        ) : user.status === "Declined" ? (
                          <span className={styles.decline}>Declined</span>
                        ) : (
                          <span className={styles.success}>Approved</span>
                        )}
                      </td>
                      <td className={styles.actions}>
                        <Link
                          className={styles.cta_}
                          href={`withdrawals/approve?id=${user.id}&userId=${user.userId}`}
                        >
                          <DoneAllIcon />
                          <span>Approve</span>
                        </Link>
                        <Link
                          className={styles.cta_}
                          href={`withdrawals/decline?id=${user.id}&userId=${user.userId}`}
                        >
                          <CancelIcon />
                          <span>Decline</span>
                        </Link>

                        <Link
                          className={styles.cta_}
                          href={`withdrawals/delete?id=${user.id}&userId=${user.userId}`}
                        >
                          <DeleteForeverIcon />
                          <span>Delete</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <div className={styles.notransaction}>
                  {" "}
                  &lt; No Withdrawals &gt;{" "}
                </div>
              )}
            </table>
          </>
        )}
      </div>
    </Layout>
  );
};

const DealsWithdrawals = () => {
  return <DealsWithdrawalsContent />;
};

export default DealsWithdrawals;
