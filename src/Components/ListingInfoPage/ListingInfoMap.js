import React from 'react'
import styles from './ListingInfoMap.module.css';
import BackButton from "../CommonComponents/buttonBackDefaultPrimary.js"

function ListingInfoMap() {
  return (
    <div className={styles.mapContainer}>
      <h1>Location & Area</h1>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.505509019364!2d174.7544665746685!3d-36.87825338115223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47cb978a3097%3A0x30cca5da0e8d33fc!2sValley%20Road%2C%20Mount%20Eden%2C%20Auckland%201024!5e0!3m2!1sen!2snz!4v1686237545524!5m2!1sen!2snz"
      width="1500"
      height="484"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Embed"
    ></iframe>
    <div className={styles.backBtnContainer}>
    <BackButton />
    </div>
      
    </div>
    
  )
}

export default ListingInfoMap
