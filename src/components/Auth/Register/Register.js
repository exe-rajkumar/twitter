import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import styles from "./Register.module.css";
import Logo from "./../../../assets/twitter.svg";
import RegisterImage from "./../../../assets/doodle.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function Register() {
  const [registerStatus, setRegisterStatus] = useState(false);
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [catchword, setCatchword] = useState("");
  const [confirmCatchword, setConfirmCatchword] = useState("");
  const navigate = useNavigate();
  const registrationCriteria = () => {
    return (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      username != "" &&
      catchword != "" &&
      confirmCatchword !== "" &&
      catchword == confirmCatchword
    );
  };
  const resetRegistrationInputs = () => {
    setEmail("");
    setCatchword("");
    setFirstName("");
    setLastName("");
    setCatchword("");
    setConfirmCatchword("");
    setUsername("");
  };
  const containerStyles = {
    singleFormContainer: {
      minWidth: 120,
      width: "100%",
    },
  };
  const handleRegistration = async (e) => {
    setRegisterStatus(true);
    console.log("1");
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://6rect2sfu7.execute-api.ap-south-1.amazonaws.com/twitter-signup",
        {
          firstName,
          lastName,
          username,
          email,
          catchword,
        }
      );
      if (response.request.status === 200) {
        localStorage.setItem("id", response.data.user_id);
        localStorage.setItem("firstName", response.data.user_first_name);
        localStorage.setItem("lastName", response.data.user_last_name);
        localStorage.setItem("username", response.data.user_username);
        localStorage.setItem("email_id", response.data.user_email_address);
        localStorage.setItem("profilePhoto", response.data.user_profile_picture);
        navigate("/dashboard/home");
      }
    } catch (error) {
      console.log(error);
      setRegisterStatus(false);
      setError(true);
    }
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={catchword}
                    onChange={(e) => setCatchword(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    id="confirmpassword"
                    size="small"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmCatchword}
                    onChange={(e) => setConfirmCatchword(e.target.value)}
                  />
                </FormControl>
              </div>
            </div>
          </div>
          {registerStatus ? (
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
            >
              <CircularProgress />
            </div>
          ) : (
            <div className={styles.button_container}>
              <button
                disabled={!registrationCriteria()}
                className={
                  registrationCriteria()
                    ? styles.valid_button
                    : styles.disabled_button
                }
                onClick={handleRegistration}
              >
                SIGNUP
              </button>
              <button
                className={styles.valid_button}
                onClick={resetRegistrationInputs}
              >
                RESET
              </button>
            </div>
          )}
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
