"use client";
import React, { useState } from "react";
import Layout from "../Layout";
import styles from "../users/users.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ReplyIcon from "@mui/icons-material/Reply";

const DeleteAdmin = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const deleteUser = await axios.delete("/api/admin", {
        params: { id },
      });
      if (deleteUser.data.message === "success") {
        toast.success("Records deleted successfully");

        router.push("/admin/admin_");
      } else {
        toast.error("An error occured");
      }
    } catch (error) {
      toast.error("An error occured");
    }
  };
  return (
    <Layout pageTitle="Delete Admin">
      <div className={styles.wrapper}>
        <Link href="/admin/admin_" className={styles.btnBack}>
          <ReplyIcon />
          Back
        </Link>

        <Toaster position="bottom-left" />
        <div className={styles.ctaWrap}>
          <p>Do you wish to delete this admin details?</p>
          <div className={styles.btnWrap}>
            <button
              className={styles.btnNo}
              onClick={() => router.push("/admin/admin_")}
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

export default DeleteAdmin;
