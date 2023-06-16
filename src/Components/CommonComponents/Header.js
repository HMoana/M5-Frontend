import React from "react";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logoImage}
        src={require("./images/logo.png")}
        alt="logo"
      />
      <nav className={styles.nav}>
        <ul>
          <li className={styles.active}>
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li>
            <a href="https://www.google.com/">Services</a>
          </li>
          <li>
            <Link to="/listingsPage">Rent</Link>
          </li>
          <li>
            <a href="https://www.google.com/">News</a>
          </li>
          <li>
            <a href="https://www.google.com/">About Us</a>
          </li>
          <li>
            <a href="https://www.google.com/">Contact</a>
          </li>
          <li>
            <img
              className={styles.phoneImg}
              src={require("./images/Vectorred.png")}
              alt="phone"
            />
            <a href="tel:09-391-4642">09 391 4642</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
