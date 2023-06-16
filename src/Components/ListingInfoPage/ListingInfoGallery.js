import React from "react";
import styles from "./ListingInfoGallery.module.css";
import TertiaryButtons from "../CommonComponents/buttonDefaultTertiary.js";

const ListingInfoGallery = () => {
  return (
    <div>
      <div className={styles.galleryContainer}>
        <div className={styles.mainImageContainer}>
          <img
            className={styles.mainImage}
            src={require("./images/Main.jpg")}
            alt="main-img"
          ></img>
        </div>

        <div className={styles.assortedImageContainer}>
          <img
            className={styles.assortedImages}
            src={require("./images/Kitchen.jpg")}
            alt="kitchen-img"
          ></img>
          <img
            className={styles.assortedImages}
            src={require("./images/Lounge.jpg")}
            alt="lounge-img"
          ></img>
          <img
            className={styles.assortedImages}
            src={require("./images/Bedroom.jpg")}
            alt="bedroom-img"
          ></img>
          <img
            className={styles.assortedImages}
            src={require("./images/Bathroom.jpg")}
            alt="bathroom-img"
          ></img>
        </div>
      </div>

      <div className={styles.buttons}>
        <TertiaryButtons />
      </div>
    </div>
  );
};

export default ListingInfoGallery;
