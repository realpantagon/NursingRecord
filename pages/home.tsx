import React from "react";
import styles from "../styles/home.module.css";
import Navbar from "@/component/navbar";

export default function search() {
  return (
    <div className="bg-gradient-to-b from-teal-300 to-indigo-300  h-screen">
      <Navbar />
        <h1 className={styles.font}>ผู้ป่วยที่ต้องดูแล</h1>
        <div className={styles.contentcontainer}>
        
        </div>
    </div>
  );
}
