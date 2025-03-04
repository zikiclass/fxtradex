"use client";
import React, { useState } from "react";
import Layout from "../Layout";
import styles from "../users/users.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ReplyIcon from "@mui/icons-material/Reply";
const DeleteClient = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("userId");
  const router = useRouter();

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const deleteUser = await axios.delete("/api/users/email", {
        params: { id },
      });
      if (deleteUser.data.message === "success") {
        toast.success("Records deleted successfully");

        router.push("/admin/users");
      } else {
        toast.error("An error occured");
      }
    } catch (error) {
      toast.error("An error occured");
    }
  };
  return (
    <Layout pageTitle="Fund Account">
      <div className={styles.wrapper}>
        <Link href="/admin/users" className={styles.btnBack}>
          <ReplyIcon />
          Back
        </Link>
        <Toaster position="bottom-left" />
        <div className={styles.ctaWrap}>
          <p>Do you wish to delete this user details?</p>
          <div className={styles.btnWrap}>
            <button
              className={styles.btnNo}
              onClick={() => router.push("/admin/users")}
            >
              No
            </button>
            <button className={styles.btnDelete} onClick={handleDelete}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeleteClient;
