import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../Navigation/Navbar";
import styles from "./Dashboard.module.css";

export default function Dashboard({}) {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
