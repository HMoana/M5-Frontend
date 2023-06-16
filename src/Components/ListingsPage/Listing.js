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

  //--------------------SUBURB AREA FILTER----------------

  const suburbFilter = (propertySuburb) => {
    const suburbToShow = books.filter((propSuburb) => {
      return propSuburb.address.suburb === propertySuburb;
    });
    setSelectionToShow(suburbToShow);
  };
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

    {
      books &&
        setSelectionToShow(
          books.filter((book) => {
            // if user has checked a bedrooms checkbox, and if that bedrooms is NOT the same bedrooms that is inside the current data's category, then return false otherwise if true continue
            if (
              chosenBedrooms.length &&
              !chosenBedrooms.includes(book.bedrooms)
            )
              return false;
            // if user has checked a bathrooms checkbox, and if that bathrooms is NOT the same bathrooms that is inside the current data's category, then return false otherwise if true continue
            if (
              chosenBathrooms.length &&
              !chosenBathrooms.includes(book.bathrooms)
            )
              return false;

            // Filter the products based on the selected price range
            const productPrice = Number(book.price.replace("$", ""));
            if (
              (minPrice && productPrice < minPrice) ||
              (maxPrice && productPrice > maxPrice)
            )
              return false;
            // If all previous if statements evaluate to true, then return true for the current data and add it to the returned filtered array
            return true;
          })
        );
    }
  }, [books, chosenBedrooms, chosenBathrooms, minPrice, maxPrice]);
  console.log(selectionToShow);
  return (
    <div>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Browse Properties</h1>
        <div className={styles.checkboxes}>
          <div>
            <label htmlFor="min-price">Suburb:</label>
            <select
              onChange={(event) => suburbFilter(event.target.value)}
              className={styles.suburbFieldBox}
            >
              <option value="Papakura">Papakura, Auckland</option>
              <option value="Massey">Massey, Auckland</option>
              <option value="Pukekohe">Pukekohe, Auckland</option>
              <option value="Remueraa">Remuera, Auckland</option>
              <option value="Ellerslie">Ellerslie, Auckland</option>
              <option value="Mt Eden">Mt Eden, Auckland</option>
              <option value="Hobsonville">Hobsonville, Auckland</option>
              <option value="West Harbour">West Harbour, Auckland</option>
            </select>
          </div>
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

          {/* //-------------------------------------------------------- */}
          <div className={styles.checkBoxContainer}>
            <label htmlFor="bedroom-no">Bedrooms: </label>
            <input
              type="checkbox"
              id="two"
              value="two"
              onChange={handleBedrooms}
            />
            <label htmlFor="two" className={styles.checkBoxSpacing}>
              2
            </label>
            <br />
            <input
              type="checkbox"
              id="three"
              value="three"
              onChange={handleBedrooms}
            />
            <label htmlFor="three" className={styles.checkBoxSpacing}>
              3
            </label>
            <br />
            <input
              type="checkbox"
              id="four"
              value="four"
              onChange={handleBedrooms}
            />
            <label htmlFor="four" className={styles.checkBoxSpacing}>
              4
            </label>
          </div>

          {/* BATHROOMS */}
          <div className={styles.checkBoxContainer}>
            <label htmlFor="bathroom-no">Bathrooms:</label>
            <input
              type="checkbox"
              id="one"
              value="one"
              onChange={handleBathrooms}
            />
            <label htmlFor="one" className={styles.checkBoxSpacing}>
              {" "}
              1{" "}
            </label>
            <input
              type="checkbox"
              id="two"
              value="two"
              onChange={handleBathrooms}
            />
            <label htmlFor="one-four" className={styles.checkBoxSpacing}>
              {" "}
              2{" "}
            </label>
            <br />
            <input
              type="checkbox"
              id="three"
              value="three"
              onChange={handleBathrooms}
            />
            <label htmlFor="three" className={styles.checkBoxSpacing}>
              {" "}
              3{" "}
            </label>
          </div>
        </div>

        {/* =============================================================MAPPING */}
        <div className={styles.productsContainer}>
          {selectionToShow &&
            selectionToShow.map(function (book) {
              return (
                <div key={book.id} className={styles.card}>
                  <img
                    className={styles.avatar}
                    src={book.image}
                    alt="property-photo"
                  ></img>
                  <div className={styles.propertyInfo}>
                    <div>
                      <h3>
                        {book.address.street} <br />
                        {book.address.suburb} <br />
                        {book.price} <span>p. week</span>
                      </h3>
                      {book.features}
                    </div>

                    <div className={styles.roomIconsContainer}>
                      <h4>{book.bedroomsnumber}</h4>
                      <img
                        className={styles.roomIcons}
                        src={require("./images/bed-doublegrey.png")}
                        alt="logo"
                      />
                      <h4>{book.bathroomsnumber}</h4>
                      <img
                        className={styles.roomIcons}
                        src={require("./images/bathgrey.png")}
                        alt="logo"
                      />
                      <h4>{book.garage}</h4>
                      <img
                        className={styles.roomIcons}
                        src={require("./images/cargrey.png")}
                        alt="logo"
                      />
                    </div>
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
