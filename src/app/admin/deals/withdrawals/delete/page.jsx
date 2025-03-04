"use client";
import React, { useState } from "react";
import Layout from "../../../Layout";
import styles from "../../../users/users.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ReplyIcon from "@mui/icons-material/Reply";
const DeleteWithdrawal = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const userId = searchParams.get("userId");
  const router = useRouter();

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const delete_ = await axios.delete(
        "/api/users/withdrawals/uniquewithdraw",
        {
          data: { id },
        }
      );
      if (delete_.data.message === "success") {
        toast.success("Transaction deleted successfully");

        router.push(`/admin/deals/withdrawals?userId=${userId}`);
      } else {
        toast.error("An error occured");
      }
    } catch (error) {
      toast.error("An error occured");
    }
  };
  return (
    <Layout pageTitle="Decline Deposit">
      <div className={styles.wrapper}>
        <Link
          href={`/admin/deals/withdrawals?userId=${userId}`}
          className={styles.btnBack}
        >
          <ReplyIcon />
          Back
        </Link>
        <Toaster position="bottom-left" />
        <div className={styles.ctaWrap}>
          <p>Do you wish to delete this withdrawal?</p>
          <div className={styles.btnWrap}>
            <button
              className={styles.btnNo}
              onClick={() =>
                router.push(`/admin/deals/withdrawals?userId=${userId}`)
              }
            >
              No
            </button>
            <button className={styles.btnDecline} onClick={handleDelete}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeleteWithdrawal;
