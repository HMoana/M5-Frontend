import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ListingInfoPage.module.css";

const ListingInfoPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  return (
    <>
      {item && (
        <>
          <h2 className={styles.address}>Address</h2>
          <p>{item.address.street}</p>
          <p>{item.address.suburb}</p>
          <p>{item.address.city}</p>
          <h2>Features</h2>
          <p>{item.features}</p>
        </>
      )}
    </>
  );
};

export default ListingInfoPage;
