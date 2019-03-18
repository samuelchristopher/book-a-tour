import React from "react"
import styles from "./footer.module.css"

const Footer = () => (
  <footer>
    {/* <div className={styles.footer__logo} /> */}
    <div className={styles.footer__partnersContainer}>
      <p className={styles.footer__partnersHeading}>
        grace travel <br />
        agency partners
      </p>
      <div className={styles.footer__partnersLinksContainer}>
        <div className={styles.partnersLinks__row}>
          <a href="http://www.gracebrunei.com/clubmed/">Club Med</a>
          <a href="http://www.gracebrunei.com/koreanair/">Korean Air</a>
        </div>
        <div className={styles.partnersLinks__row}>
          <a href="http://www.gracebrunei.com/bangkokhospital/">
            Bangkok Hospital
          </a>
          <a href="http://www.gracebrunei.com/bangkokairways/">Bangkok Air</a>
        </div>
      </div>
    </div>
    <div className={styles.footer__generalLinks}>
      <a href="http://www.gracebrunei.com/aboutus/">About</a>
      <a href="#">Contact Us</a>
      <a href="http://www.gracebrunei.com/tours/">Tours</a>
    </div>
    <p className={styles.footer__copyright}>
      Grace Travel Agnecy is not responsible for content on external Websites.{" "}
      <br />
      Copyright 2019 Grace Travel Agency. All rights reserved.
    </p>
  </footer>
)

export default Footer