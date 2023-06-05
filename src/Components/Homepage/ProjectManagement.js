import React from "react";
import styles from "./MainContainer.module.css";

const ProjectManagement = () => {
  return (
    <div className={styles.rentalProperties}>
      <img
        className={styles.imageOne}
        src={require("./images/2. Property-management.jpg")}
        alt="property-img"
      ></img>
      <div className={styles.rentalText}>
        <h1>Property Management & Investment Properties</h1>
        <p>
          The team at Metro NZ Property Management have the best knowledge and
          experience to manage your property. We have systems in place that
          allow us to be environmentally conscious and work in paperless
          conditions.
        </p>
        <a href="https://www.google.com">
          <button className={styles.rentalButton}>Property Management</button>
        </a>
        <a href="https://www.google.com">
          <button className={styles.rentalButton}>Investment Property</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectManagement;
