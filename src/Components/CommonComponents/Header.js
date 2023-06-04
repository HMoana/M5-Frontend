import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logoImage}
        src={require("./images/logo.png")}
        alt="logo-img"
      />
      <nav className={styles.nav}>
        <ul>
          <li className={styles.active}>
            <a href="https://www.google.com/">Home</a>
          </li>
          <li>
            <a href="https://www.google.com/">Services</a>
          </li>
          <li>
            <a href="https://www.google.com/">Rent</a>
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
              alt="logo-img"
            />
            <a>09 391 4642</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
