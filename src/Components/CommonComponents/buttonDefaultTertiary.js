import React from 'react'
import { Link } from 'react-router-dom'
import styles from './buttonDefaultTertiary.module.css'

const buttonDefaultTertiary = () => {
  return (
    <div>
      <Link to="/listingsPage"><button className={styles.tBtns}>Return to search</button></Link>
        <button className={styles.tBtns}>Gallery</button>
    </div>
  )
}

export default buttonDefaultTertiary
