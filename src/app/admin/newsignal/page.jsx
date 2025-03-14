"use client";
import React, { useRef } from "react";
import Layout from "../Layout";
import styles from "../users/users.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReplyIcon from "@mui/icons-material/Reply";

const NewSignals = () => {
  const router = useRouter();
  const signupFormRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    const data = {
      action: formData.get("action"),
      amount: parseFloat(formData.get("amount")),
      leverage: parseInt(formData.get("leverage")),
      profit: parseFloat(formData.get("profit")),
      loss: parseFloat(formData.get("loss")),
      duration: formData.get("duration"),
      outcome: formData.get("outcome"),
    };

    try {
      const response = await axios.post("/api/signals", data);

      if (response.data.message === "success") {
        router.push("/admin/trades");
        toast.success("Signal added");
      } else {
        toast.error(response.data.message || "Error occurred");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form", error);
    }
  };

  return (
    <Layout pageTitle="New Signals">
      <div className={styles.wrapper} ref={signupFormRef}>
        <Link href="/admin/trades" className={styles.btnBack}>
          <ReplyIcon />
          Back
        </Link>
        <Toaster position="bottom-left" />

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label>Action</label>
            <select name="action">
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
            </select>
          </div>
          <div className={styles.input}>
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              placeholder="Trading Amount"
              required
            />
          </div>
          <div className={styles.input}>
            <label>Leverage</label>
            <input
              type="text"
              name="leverage"
              placeholder="Leverage"
              required
            />
          </div>
          <div className={styles.input}>
            <label>Profit</label>
            <input type="text" name="profit" placeholder="Profit" required />
          </div>
          <div className={styles.input}>
            <label>Loss</label>
            <input type="text" name="loss" placeholder="Loss" required />
          </div>
          <div className={styles.input}>
            <label>Duration</label>
            <select name="duration">
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
              <option value="90">90</option>
              <option value="120">120</option>
            </select>
          </div>
          <div className={styles.input}>
            <label>Outcome</label>
            <select name="outcome">
              <option value="win">WIN</option>
              <option value="loss">LOSS</option>
            </select>
          </div>

          <input
            type="submit"
            value="Add Signals"
            className={styles.btnSubmit}
          />
        </form>
      </div>
    </Layout>
  );
};

export default NewSignals;
