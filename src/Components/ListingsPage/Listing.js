import React from "react";
import styles from "./Listing.module.css";
import { useEffect, useState } from "react";

export default function List() {
  // ---------------- STATES ----------------
  const [books, setBooks] = useState();
  const [selectionToShow, setSelectionToShow] = useState();

  // Chosen Catagories
  const [chosenBedrooms, setChosenBedrooms] = useState([]);
  const [chosenBathrooms, setChosenBathrooms] = useState([]);

  // Total To Show
  const [totalToShow, setTotalToShow] = useState(15);

  // ---------------- API FETCH BY JIN ----------------
  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);
  console.log("hello");

  // ---------------- PRICE HANDLERS ADDED ----------------
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const handleMinPrice = (e) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPrice = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  // ---------------- FILTER EVENT HANDLERS ----------------

  const handleTotalToShow = (e) => {
    setTotalToShow(Number(e.target.value));
  };

  //Bedrooms Handler One

  const handleBedrooms = (e) => {
    const bedroomsToFilter = e.target.value;
    // Check if checked value is already checked
    // If checkbox was already checked, remove it from array
    if (chosenBedrooms.includes(bedroomsToFilter)) {
      console.log("BEDROOM object updated. Removed:", bedroomsToFilter);
      setChosenBedrooms((prevState) => {
        return prevState.filter((bedrooms) => bedrooms !== bedroomsToFilter);
      });
    } else {
      // If checkbox was not already checked, add it to the array
      setChosenBedrooms((prevState) => {
        console.log("Bedrooms object updated. Added:", bedroomsToFilter);
        return [...prevState, bedroomsToFilter];
      });
    }
  };

  // Bathrooms Handler
  const handleBathrooms = (e) => {
    const bathroomsToFilter = e.target.value;
    // Check if checked value is already checked
    // If checkbox was already checked, remove it from array
    if (chosenBathrooms.includes(bathroomsToFilter)) {
      console.log("Bathrooms object updated. Removed:", bathroomsToFilter);
      setChosenBathrooms((prevState) => {
        return prevState.filter((bathrooms) => bathrooms !== bathroomsToFilter);
      });
      return;
    }
    // If checkbox was not already checked, add it to the array
    setChosenBathrooms((prevState) => {
      console.log("bathrooms object updated. Added:", bathroomsToFilter);
      return [...prevState, bathroomsToFilter];
    });
  };

  // ---------------- FILTERS ----------------
  useEffect(() => {
    console.log(
      "Chosen Bedrooms array:",
      chosenBedrooms,
      "Chosen Bathrooms array:",
      chosenBathrooms
    );

    setSelectionToShow(
      products
        .filter((product) => {
          // if user has checked a bedrooms checkbox, and if that bedrooms is NOT the same bedrooms that is inside the current product's category, then return false otherwise if true continue
          if (
            chosenBedrooms.length &&
            !chosenBedrooms.includes(product.bedrooms)
          )
            return false;
          // if user has checked a bathrooms checkbox, and if that bathrooms is NOT the same bathrooms that is inside the current product's category, then return false otherwise if true continue
          if (
            chosenBathrooms.length &&
            !chosenBathrooms.includes(product.bathrooms)
          )
            return false;

          // Filter the products based on the selected price range
          const productPrice = Number(product.price.replace("$", ""));
          if (
            (minPrice && productPrice < minPrice) ||
            (maxPrice && productPrice > maxPrice)
          )
            return false;
          // If all previous if statements evaluate to true, then return true for the current product and add it to the returned filtered array
          return true;
        })
        .slice(0, totalToShow)
    );
  }, [chosenBedrooms, chosenBathrooms, minPrice, maxPrice, totalToShow]);
  console.log(selectionToShow);
  return (
    <div>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Browse Properties</h1>
        <div className={styles.checkboxes}>
          <label htmlFor="min-price">Minimum Price:</label>
          <select
            id="min-price"
            onChange={handleMinPrice}
            className={styles.inputFieldBox}
          >
            <option value="">No minimum</option>
            <option value="200">$200</option>
            <option value="300">$300</option>
            <option value="400">$400</option>
            <option value="500">$500</option>
            <option value="600">$600</option>
            <option value="700">$700</option>
            <option value="800">$800</option>
          </select>
          <br />
          <label htmlFor="max-price">Maximum Price:</label>
          <select
            id="max-price"
            onChange={handleMaxPrice}
            className={styles.inputFieldBox}
          >
            <option value="">No maximum</option>
            <option value="200">$200</option>
            <option value="300">$300</option>
            <option value="400">$400</option>
            <option value="500">$500</option>
            <option value="600">$600</option>
            <option value="700">$700</option>
            <option value="800">$800</option>
          </select>

          <br />

          <select onChange={handleBedrooms} className={styles.dropDownMenu}>
            <option value="" disabled selected>
              Number of Bedrooms
            </option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
          </select>
          {/* BATHROOMS */}
          <select onChange={handleBathrooms} className={styles.dropDownMenu}>
            <option value="" disabled selected>
              Number of Bathrooms
            </option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
          </select>
        </div>

        {/* =============================================================MAPPING */}
        <div className={styles.productsContainer}>
          {selectionToShow &&
<<<<<<< HEAD
            selectionToShow.map(function (product) {
              return (
                <div key={product.id} className={styles.card}>
                  <img
                    className={styles.avatar}
                    src={product.image}
=======
            selectionToShow.map(function (data) {
              return (
                <div key={data.id} className={styles.card}>
                  <img
                    className={styles.avatar}
                    src={data.image}
>>>>>>> origin/master
                    alt="property-photo"
                  ></img>
                  <div className={styles.propertyInfo}>
                    <h3>
<<<<<<< HEAD
                      {product.address.street} <br />
                      {product.address.suburb} <br />
                      {product.price} <span>per week</span>
                    </h3>
                    <h4>{product.bedrooms}</h4>
=======
                      {data.address.street} <br />
                      {data.address.suburb} <br />
                      {data.price} <span>per week</span>
                    </h3>
                    <h4>{data.bedrooms}</h4>
>>>>>>> origin/master
                  </div>
                </div>
              );
            })}
        </div>
        {/* =============================================================MAPPING */}
      </div>
    </div>
  );
}
