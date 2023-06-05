import React from "react";
import styles from "./FormFilling.module.css";

const FormFilling = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formDesign}>
        <h1>
          Ask Us How Can We Help You To Achieve Harmony With Your Investment
          Portfolio By Hiring Our Expertise And Skills
        </h1>
        <div>
          <form action="/action_page.php">
            <div>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
                className={styles.name}
              />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                className={styles.name}
              />
            </div>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              className={styles.formText}
            />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className={styles.formText}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              style={{ height: "200px" }}
              className={styles.formText}
            />
            <input
              type="submit"
              value="Submit"
              className={styles.submitButtonTwo}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormFilling;
