import React from "react";
import styles from "./ListingInfoGallery.module.css";
import TertiaryButtons from "../CommonComponents/buttonDefaultTertiary.js";
import { useEffect, useState } from "react";

const ListingInfoGallery = () => {
  const [properties, setProperties] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/propertyinfo")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    console.log(properties),
    (
      <div>
        {properties && (
          <>
            <div>
              <h1>{properties.imageone}</h1>
              <div className={styles.galleryContainer}>
                <div className={styles.mainImageContainer}>
                  <img
                    className={styles.mainImage}
                    src={properties.mainimage}
                    alt="main-img"
                  ></img>
                </div>

                <div className={styles.assortedImageContainer}>
                  <img
                    className={styles.assortedImages}
                    src={properties.imageone}
                    alt="kitchen-img"
                  ></img>
                  <img
                    className={styles.assortedImages}
                    src={properties.imagetwo}
                    alt="lounge-img"
                  ></img>
                  <img
                    className={styles.assortedImages}
                    src={require("./images/Bedroom.jpg")}
                    alt="bedroom-img"
                  ></img>
                  <img
                    className={styles.assortedImages}
                    src={properties.imagethree}
                    alt="bathroom-img"
                  ></img>
                </div>
              </div>

              <div className={styles.buttons}>
                <TertiaryButtons />
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default ListingInfoGallery;
