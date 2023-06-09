import React from 'react'
import styles from './ListingInfoMainContainer.module.css'
import ListingInfoFeature from './ListingInfoFeature'
// import ListingInfoAgent from './ListingInfoAgent'

const ListingInfoMainContainer = () => {
  return (
    <div className={styles.ListingInfoMainContainer}>
      <ListingInfoFeature />
      {/* <ListingInfoAgent /> */}
    </div>
  )
}

export default ListingInfoMainContainer

