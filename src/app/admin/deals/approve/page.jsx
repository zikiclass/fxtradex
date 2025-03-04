"use client";
import React, { Suspense, useState, useEffect } from "react";
import Layout from "../../Layout";
import styles from "../../users/users.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ReplyIcon from "@mui/icons-material/Reply";

// Simulate an asynchronous operation to load searchParams
const useSearchParamsWithSuspense = () => {
  const searchParams = useSearchParams();
  const [params, setParams] = useState(null);

  useEffect(() => {
    if (searchParams) {
      setParams(searchParams); // Set the parameters once they're available
    }
  }, [searchParams]);

  if (!params) {
    // Simulate a delay to suspend the component
    throw new Promise(() => {});
  }

  return params;
};

const ApproveDepositContent = () => {
  const searchParams = useSearchParamsWithSuspense(); // Use the modified hook with Suspense
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
        toast.error("An error occurred");
      }
    } catch (error) {
      toast.error("An error occurred");
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

const ApproveDeposit = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApproveDepositContent />
    </Suspense>
  );
};

export default ApproveDeposit;
