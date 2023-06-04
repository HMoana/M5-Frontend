import React from "react";
import styles from "./VideoDisplay.module.css";
import LocalVideo from "./images/MRENZ_41BEACH_FINAL.mov";

const VideoDisplay = () => {
  return (
    <div className={styles.videoDisplay}>
      <div className={styles.textArea}>
        <h1>Metro NZ - A Bespoke Auckland Property Management Company</h1>
        <p>
          All the property management tasks that you would expect to be done by
          us are done to the very highest standard. We go above and beyond and
          take care of some things that other property management companies
          would ignore. One of those is that we arrange the staging of your
          property where that is required or where we know that it will attract
          a better class of renters. A well-presented property will benefit the
          property owner, the tenant and us.
          <br />
          <br />
          We have a stringent tenant selection process by our specialised
          leasing team. Our approach leaves no room for compromise. Our
          appraisals are obligation-free and ensure that you get the best
          returns. We manage properties in Central Auckland and Auckland
          suburbs, like Albany but also in most other areas of New Zealand so we
          know the market.
          <br />
          <br />
          That way you are ensured that your rental is in good hands, that you
          get maximum returns, peace of mind and that risks are minimised. Our
          award for “Excellence in Strategy and Planning” shows that our company
          systems are sound, from initial contact and agreement to looking after
          existing and finding new tenants and managing your property long-term.
          Get in touch with our experienced team in the Auckland region and
          enjoy property management services of the highest standard. Not every
          property management company can boast that they are finalists for the
          Westpac Business Awards.
        </p>
      </div>
    </div>
  );
};

export default VideoDisplay;
