import React from 'react'
import styles from './buttonAgentBookingDefaultPrimary.module.css'

const buttonAgentBookingDefaultPrimary = () => {
  return (
    <div>
      <button className={styles.dAgentBookingBtns}>Book a viewing</button><br/>
      <button className={styles.dAgentBookingBtns}>Apply for this property</button>
    </div>
  )
}

export default buttonAgentBookingDefaultPrimary
