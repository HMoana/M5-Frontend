import React from 'react'
import styles from './ListingInfoFeature.module.css';
import PrimaryButtons from '../CommonComponents/buttonDefaultPrimary';
import EnquireButton from '../CommonComponents/buttonAgentDefaultTertiary';
import BookingButton from '../CommonComponents/buttonAgentBookingDefaultPrimary';

const ListingInfoFeature = () => {
  return (
   <div className={styles.featureWrapper}>

     {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Featurette section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
     <div className={styles.featureContainer}>
      <div className={styles.featureText}>
        <h1>Exquisite Villa in Mt Eden</h1>
        <h2>70B Valley Road, Mt Eden, Auckland</h2>
        <h2>$650</h2>

        <span className={styles.spanText}>
                  2 
                  <img
                className={styles.icons}
                src={require("./images/bed-double.png")}
                alt="bed-img"
              ></img>
                1 
                  <img
                className={styles.icons}
                src={require("./images/bath.png")}
                alt="bath-img"
              ></img>
                0 
                  <img
                className={styles.icons}
                src={require("./images/car.png")}
                alt="car-img"
              ></img>
        </span>
        <br></br>

        <span>Pets Allowed? <span className={styles.spanPets}>Yes</span></span>

        <div className={styles.featuretteText}>
          <p>
          Welcome to this truly stunning villa nestled in the picturesque neighbourhood of Mount Eden.
          <br/><br/>This gorgeous 5-bedroom property is a must-see, as it offers an exceptional blend of
          <br/> elegance, versatility, and prime location. With its irresistible charm, this home is sure to captivate your senses.
          <br/><br/> The raised ceilings and large windows throughout the villa allow natural sunlight to flood 
          <br/> in, creating a bright and inviting ambiance.
          </p>
        </div>
      </div>
    </div>

    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Agent section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
   
   
   <div className={styles.agent}>
    <div className={styles.agentDets}>
      <span className={styles.agentDetsSpan}>
      <img
          className={styles.agentImage}
          src={require("./images/Agent.png")}
          alt="agent-img"
      ></img>
        Stephanie Huang
      </span>
      <br></br>
      <div className={styles.agentEnquire}>
      <PrimaryButtons />
      <EnquireButton/>
      </div>
      
    </div>

    <div className={styles.agentBookingBts}>
        <BookingButton/>
    </div>


   </div>

   </div>
  )
}

export default ListingInfoFeature
