import React from 'react'
import { Link } from 'react-router-dom'
import styles from './buttonBackDefaultPrimary.module.css'

const buttonBackDefaultPrimary = () => {
  return (
    <div>
        <Link to="/listingsPage"><button className={styles.dBackBtns}>Back to Properties for Rent</button></Link>
    </div>
  )
}

export default buttonBackDefaultPrimary
