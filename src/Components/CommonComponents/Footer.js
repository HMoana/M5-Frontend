import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.bottomContainer}>
      <div className={styles.columnLeft}>
        <img
          className={styles.logoImg}
          src={require("./images/logo.png")}
          alt="logo-img"
        />
        <p className={styles.bottomText}>
          Metro NZ is one of the top Auckland Property Management companies. All
          of our staff are property investors who have expert knowledge of the
          property market and your best interest in mind at all times. Check out
          our tailored services we offer as an Auckland property management
          company.
        </p>
        <div>
          <img
            className={styles.iconImg}
            src={require("./images/linkedin.png")}
            alt="icon-img"
          />
          <img
            className={styles.iconImg}
            src={require("./images/facebook.png")}
            alt="icon-img"
          />
          <img
            className={styles.iconImg}
            src={require("./images/twitter.png")}
            alt="icon-img"
          />
          <img
            className={styles.iconImg}
            src={require("./images/linkedin.png")}
            alt="icon-img"
          />
        </div>
      </div>
      <div className={styles.columnRight}>
        <h2>Subscribe to our Newsletter</h2>
        <form action="" method="POST">
          <input
            type="text"
            placeholder="  Email Address"
            style={{
              width: "60%",
              height: "48px",
              borderRadius: "8px",
              marginRight: "10px",
            }}
          />
          <input type="submit" value="Submit" className={styles.submitButton} />
        </form>
        <p className={styles.bottomText}>
          09 391 4642 | +64 21 646 119 | info@metronz.co.nz
        </p>
        <p className={styles.bottomText}>
          Level 33, ANZ Centre 23-29 Albert St, Auckland 1010, New Zealand
        </p>
      </div>
    </footer>
  );
};

export default Footer;
