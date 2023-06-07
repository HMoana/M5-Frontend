import React from "react";
import styles from "./HeaderImageContainer.module.css";

const HeaderImageContainer = () => {
  return (
    <div className={styles.headerImageContainer}>
      <img
        className={styles.headerImage}
        src={require("./images/My project-12.png")}
        alt="icon-img"
      ></img>

      <div className={styles.textArea}>
        <h1>
          Helping clients achieve harmony through our expertise and skills
        </h1>
        <p>
          Metro NZ is one of the top Auckland Property Management companies. All
          of our staff are property investors who have expert knowledge of the
          property market and your best interest in mind at all times. Check out
          our tailored services we offer as an Auckland property management
          company.
        </p>
      </div>
    </div>
  );
};

export default HeaderImageContainer;
