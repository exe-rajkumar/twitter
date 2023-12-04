// Navbar.js

import React from "react";
import twitter from "./../../assets/twitter.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { MenuItems } from "./MenuItems";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const profilePicture = localStorage.getItem("profilePhoto");
  const logOutFunction = () => {
    localStorage.clear();
    navigate("/");
  };
  let tokenValue = localStorage.getItem("token");
  let auth = tokenValue === null ? true : false;

  return (
    <nav className={styles.navbarItems}>
      <div>
        <img
          className={styles.navbarLogo}
          src={twitter}
          width="100%"
          alt="logo"
        ></img>
      </div>

      <ul className={styles.navMenu}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link
              className={
                location.pathname === item.url
                  ? styles.navLinkStyles
                  : styles.navLinks
              }
              to={item.url}
            >
              <div>
                {item.icon}
                <span>{item.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <img
          className={styles.profilePicture}
          src={profilePicture}
          width="40px"
          height="40px"
          alt="profilePhoto"
        ></img>
      </div>
    </nav>
  );
}
