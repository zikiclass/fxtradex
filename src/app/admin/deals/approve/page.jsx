"use client";
import React, { useState } from "react";
import Layout from "../../Layout";
import styles from "../../users/users.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ReplyIcon from "@mui/icons-material/Reply";
const ApproveDeposit = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const userId = searchParams.get("userId");
  const router = useRouter();

  const handleApprove = async (event) => {
    event.preventDefault();
    try {
      const approve_ = await axios.put("/api/users/deposit/uniquedeposit", {
        id,
        action: "approve",
      });
      if (approve_.data.message === "success") {
        toast.success("Transaction approved successfully");

        router.push(`/admin/deals?userId=${userId}`);
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
        <Link href={`/admin/deals?userId=${userId}`} className={styles.btnBack}>
          <ReplyIcon />
          Back
        </Link>
        <Toaster position="bottom-left" />
        <div className={styles.ctaWrap}>
          <p>Do you wish to approve this deposit?</p>
          <div className={styles.btnWrap}>
            <button
              className={styles.btnNo}
              onClick={() => router.push(`/admin/deals?userId=${userId}`)}
            >
              No
            </button>
            <button className={styles.btnDelete} onClick={handleApprove}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApproveDeposit;
