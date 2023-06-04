import React from "react";
import styles from "./MainContainer.module.css";

const RentalProperties = () => {
  return (
    <div className={styles.rentalProperties}>
      <div className={styles.rentalText}>
        <h1>Rental Properties</h1>
        <p>
          Are you looking for a professional property manager that offers
          competitive rates? Then look no further than Metro NZ Property
          Management. We have been at the front of Auckland’s rental property
          management services for many years, offering everything you may need
          when looking to find a rental property manager.
        </p>
        <a href="https://www.google.com">
          <button className={styles.rentalButton}>Properties for Rent</button>
        </a>
        <a href="https://www.google.com">
          <button className={styles.rentalButton}>Tenant Information</button>
        </a>
        <a href="https://www.google.com">
          <button className={styles.rentalButton}>
            Rental property management
          </button>
        </a>
      </div>
      <img
        className={styles.imageOne}
        src={require("./images/1. Rental-property.jpg")}
        alt="property-img"
      ></img>
    </div>
  );
};

export default RentalProperties;
