import { React, useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import styles from "./Login.module.css";
import Logo from "./../../../assets/twitter.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [catchword, setCatchWord] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [error, setError] = useState(false);
  const loginCriteria = () => {
    return email !== "" && catchword !== "";
  };
  const resetLoginInputs = () => {
    setEmail("");
    setCatchWord("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
      setEmail("");
      setCatchWord("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);
  const containerStyles = {
    singleFormContainer: {
      minWidth: 120,
      width: "100%",
    },
  };

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    setLoginStatus(true);
    console.log("1");
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://gub74zhol4.execute-api.ap-south-1.amazonaws.com/login",
        {
          email,
          catchword,
        }
      );
      if (response.request.status === 200) {
        console.log(response.data);
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
      setLoginStatus(false);
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={catchword}
                  onChange={(e) => setCatchWord(e.target.value)}
                />
              </FormControl>
            </div>
          </div>
          {error && (
            <div className={styles.alert_file_div}>
              <div style={{ width: "80%" }}>
                <Alert severity="error">401: Wrong Credentials</Alert>
              </div>
            </div>
          )}
          {loginStatus ? (
            <div style={{ width: "100%", textAlign: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            <div className={styles.button_container}>
              <button
                onClick={handleLogin}
                disabled={!loginCriteria()}
                className={
                  loginCriteria() ? styles.valid_button : styles.disabled_button
                }
              >
                LOGIN
              </button>
              <button
                className={styles.valid_button}
                onClick={resetLoginInputs}
              >
                RESET
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.register}>
        <p style={{ fontSize: "15px" }}>Don't Have Account?</p>
        <Link to="/auth/register" style={{ textDecoration: "none" }}>
          <button className={styles.register_button}>REGISTER</button>
        </Link>
      </div>
    </div>
  );
}
