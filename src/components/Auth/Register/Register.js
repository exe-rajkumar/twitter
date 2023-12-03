import React from "react";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import styles from "./Register.module.css";
import Logo from "./../../../assets/twitter.svg";
import RegisterImage from "./../../../assets/doodle.svg";
import { Link } from "react-router-dom";

export default function Register() {
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
            <p> AUTH.REGISTER</p>
          </div>
          <div className={styles.login_container}>
            <div
              style={{
                width: "90%",
                height: "100%",
                display: "flex",
              }}
            >
              <div>
                <div className={styles.label}>
                  <label style={{ fontSize: "15px" }}>First Name:</label>
                </div>
                <FormControl
                  style={containerStyles.singleFormContainer}
                  sx={{ marginTop: "5px" }}
                >
                  <TextField
                    id="firstname"
                    size="small"
                    placeholder="First Name"
                    type="text"
                    autoComplete="false"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <div className={styles.label}>
                  <label style={{ fontSize: "15px" }}>Username:</label>
                </div>
                <FormControl
                  style={containerStyles.singleFormContainer}
                  sx={{ marginTop: "5px" }}
                >
                  <TextField
                    id="username"
                    size="small"
                    placeholder="Username"
                    type="text"
                    autoComplete="false"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <div className={styles.label}>
                  <label style={{ fontSize: "15px" }}>Password:</label>
                </div>
                <FormControl
                  style={containerStyles.singleFormContainer}
                  sx={{ marginTop: "5px" }}
                >
                  <TextField
                    id="password"
                    size="small"
                    placeholder="Password"
                    type="password"
                    autoComplete="false"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <div className={styles.label_continous}>
                  <label style={{ fontSize: "15px" }}>Last Name:</label>
                </div>
                <FormControl
                  style={containerStyles.singleFormContainer}
                  sx={{ marginTop: "5px" }}
                >
                  <TextField
                    id="lastname"
                    size="small"
                    placeholder="Last Name"
                    type="text"
                    // value={catchword}
                    // onChange={(e) => setCatchWord(e.target.value)}
                  />
                </FormControl>
                <div className={styles.label_continous}>
                  <label style={{ fontSize: "15px" }}>Email ID:</label>
                </div>
                <FormControl
                  style={containerStyles.singleFormContainer}
                  sx={{ marginTop: "5px" }}
                >
                  <TextField
                    id="email"
                    size="small"
                    placeholder="Email-Id"
                    type="email"
                    // value={catchword}
                    // onChange={(e) => setCatchWord(e.target.value)}
                  />
                </FormControl>
                <div className={styles.label_continous}>
                  <label style={{ fontSize: "15px" }}>Confirm Password:</label>
                </div>
                <FormControl
                  style={containerStyles.singleFormContainer}
                  sx={{ marginTop: "5px" }}
                >
                  <TextField
                    id="password"
                    size="small"
                    placeholder="Confirm Password"
                    type="password"
                    // value={catchword}
                    // onChange={(e) => setCatchWord(e.target.value)}
                  />
                </FormControl>
              </div>
            </div>
          </div>
          <div className={styles.button_container}>
            <button className={styles.valid_button}>SIGNUP</button>
            <button className={styles.valid_button}>RESET</button>
          </div>
        </div>
      </div>
      <div className={styles.register}>
        <p style={{ fontSize: "15px" }}>Already Registered?</p>
        <Link to="/auth/login" style={{ textDecoration: "none" }}>
          <button className={styles.register_button}>LOGIN</button>
        </Link>
      </div>
    </div>
  );
}
