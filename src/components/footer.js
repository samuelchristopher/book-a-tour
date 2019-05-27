import React from "react"
import style from "./footer.module.css"

const Footer = () => (
  <footer>
    <div className={style.container}>
      <div className={style.logo}></div>
      <div className={style.links__container}>
        <h3 className={style.links__header}>general</h3>
        <div className={style.links}>
          <a className={style.link} href="https://www.gracebrunei.com/about-us">about us</a>
          <a className={style.link} href="http://www.gracebrunei.com/contact/">contact us</a>
          <a className={style.link} href="http://www.gracebrunei.com/visitorinfo/">about brunei darussalam</a>
        </div>
      </div>
      <div className={style.links__container}>
        <h3 className={style.links__header}>exclusive partners</h3>
        <div className={style.links}>
          <a className={style.link} href="http://www.gracebrunei.com/bangkokairways/">bangkok airways</a>
          <a className={style.link} href="http://www.gracebrunei.com/bangkokhospital/">bangkok hospital</a>
          <a className={style.link} href="http://www.gracebrunei.com/bdmswellness/">BDMS wellness clinic</a>
          <a className={style.link} href="http://www.gracebrunei.com/clubmed/">club med</a>
          <a className={style.link} href="http://www.gracebrunei.com/koreanair/">korean air</a>
        </div>
      </div>
      <div className={style.links__container}>
        <h3 className={style.social__header}>Follow us for the latest upates:</h3>
        <div className={style.icons__container}>
          <a href="https://www.facebook.com/gracetravelbrunei/" className={style.icon__fb}></a>
          <a href="http://www.instagram.com/gracebrunei/" className={style.icon__ig}></a>
        </div>
        <a href="#" className={style.blue_button}>Join our newsletter!</a>
      </div>
    </div>
    <div className={style.copy}>Copyright Grace Travel Agency. All rights reserved.</div>
  </footer>
)

export default Footer