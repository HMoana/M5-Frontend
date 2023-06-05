import React from "react";
import styles from "./MainContainer.module.css";

const PropertyAppraisal = () => {
  return (
    <div className={styles.rentalProperties}>
      <img
        className={styles.imageOne}
        src={require("./images/4. Property appraisal.jpg")}
        alt="property-img"
      ></img>
      <div className={styles.rentalText}>
        <h1>Property Appraisal & Improvement</h1>
        <p>
          We conduct a thorough appraisal of your property that you want to put
          up for rent based on the current rent market at that moment. This will
          give you a good representation of where to set your rent and what
          possibilities there are for property advancements. We conduct these
          appraisals to a high standard to ensure that you are getting the most
          out of your property, especially if it is an
        </p>
        <a href="https://www.google.com">
          <button className={styles.rentalButton}>
            Free Property Appraisal
          </button>
        </a>
        <a href="https://www.google.com">
          <button className={styles.rentalButton}>Paste to Replace</button>
        </a>
        <a href="https://www.google.com">
          <button className={styles.rentalButton}>
            Renovation Project Management
          </button>
        </a>
      </div>
    </div>
  );
};

export default PropertyAppraisal;
