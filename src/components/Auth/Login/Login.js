import React from "react";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import styles from "./Login.module.css";
import Logo from "./../../../assets/twitter.svg";

export default function Login() {
  const containerStyles = {
    singleFormContainer: {
      minWidth: 120,
      width: "100%",
    },
  };
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <div className={styles.login_card}>
          <div className={styles.brand}>
            <img src={Logo} width="50px" />
            <p>twitter</p>
          </div>
          <div className={styles.pageHeader}>
            <p> AUTH.LOGIN</p>
          </div>
          <div className={styles.login_container}>
            <div
              style={{
                width: "90%",
                height: "100%",
              }}
            >
              <div className={styles.label}>
                <label style={{ fontSize: "15px" }}>Email:</label>
              </div>
              <FormControl
                style={containerStyles.singleFormContainer}
                sx={{ marginTop: "5px" }}
              >
                <TextField
                  id="email"
                  size="small"
                  placeholder="Enter Email-ID"
                  type="email"
                  autoComplete="false"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <div className={styles.label_continous}>
                <label style={{ fontSize: "15px" }}>Password:</label>
              </div>
              <FormControl
                style={containerStyles.singleFormContainer}
                sx={{ marginTop: "5px" }}
              >
                <TextField
                  id="password"
                  size="small"
                  placeholder="Enter Password"
                  type="password"
                  // value={catchword}
                  // onChange={(e) => setCatchWord(e.target.value)}
                />
              </FormControl>
            </div>
          </div>
          <div className={styles.button_container}>
            <button className={styles.valid_button}>LOGIN</button>
            <button className={styles.valid_button}>RESET</button>
          </div>
        </div>
      </div>
      <div className={styles.register}>
        <p style={{ fontSize: "15px" }}>Don't Have Account?</p>
        <button className={styles.register_button}>REGISTER</button>
      </div>
    </div>
  );
}
