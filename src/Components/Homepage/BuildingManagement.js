import React from "react";
import styles from "./MainContainer.module.css";

const BuildingManagement = () => {
  return (
    <div className={styles.rentalProperties}>
      <div className={styles.rentalText}>
        <h1>Building Management & Body Corporate Administration</h1>
        <p>
          Our team can provide a range of services from day-to-day operations
          and a plan to manage property repairs that need to be taken care of
          from time to time. Metro NZ Property Management is a professional
          Auckland property management company that provides exceptional service
          and will give property owners assistance on how to take good care of
          their property.
        </p>
        <a href="https://www.google.com">
          <button className={styles.rentalButton}>Building Management</button>
        </a>
        <a href="https://www.google.com">
          <button className={styles.rentalButton}>Body Corporate Adm</button>
        </a>
      </div>
      <img
        className={styles.imageOne}
        src={require("./images/3. Building-management.jpg")}
        alt="property-img"
      ></img>
    </div>
  );
};

export default BuildingManagement;
