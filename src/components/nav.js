/* eslint-disable */
import React, { Component } from "react"

import { Link } from "gatsby"
import style from "./nav.module.css"

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      mobileNavOpen: false
    }

    this.openMobileNav = this.openMobileNav.bind(this)
    this.closeMobileNav = this.closeMobileNav.bind(this)
  }


  openMobileNav(e) {
    this.setState({
      mobileNavOpen: true
    })
  }

  closeMobileNav(e) {
    this.setState({
      mobileNavOpen: false
    })
  }

  render() {
    return (
      (
        <div className={style.menu}>
          <div className={style.mobile_nav}>
            <div onClick={this.openMobileNav} className={
              this.state.mobileNavOpen ? style.hide : style.menu__button
            }></div>
            <div className={
              this.state.mobileNavOpen ? style.show : style.hide
            }>
              <div onClick={this.closeMobileNav} className={style.mobile_nav_close_button}> </div>
              <div className={style.mobile_nav_menu_items}>
                <a className={`${style.mobile_nav_link} ${style.blue_button}`} href="http://www.gracebrunei.com/airfare-promo/">Promotions</a>
                {/* <a className={style.mobile_nav_link} href="/contact">Tours</a> */}
                {/* <a className={style.mobile_nav_link} href="#">Exclusive Partners</a> */}
                <a className={style.mobile_nav_link} href="https://www.gracebrunei.com">Home</a>
                <Link className={style.mobile_nav_link} to="/">Tours</Link>
                <a className={style.mobile_nav_link} href="https://www.gracebrunei.com/about-us">About Us</a>
                <a className={style.mobile_nav_link} href="http://www.gracebrunei.com/contact/">Contact Us</a>
                <a className={style.mobile_nav_link} href="http://cn.gracebrunei.com">中文</a>
                {/* <Link className={style.mobile_nav_link} href="/">English</Link> */}
                {/* <a className={style.mobile_nav_link} href="#">Chinese</a> */}
              </div>
            </div>
          </div>
          <div className={style.desktop_nav}>
            <a className={`${style.desktop_nav_link} ${style.blue_button}`} href="http://www.gracebrunei.com/airfare-promo/">Promotions</a>
            {/* <a className={style.desktop_nav_link} href="#">Tours</a> */}
            {/* <a className={style.desktop_nav_link} href="#">Exclusive Partners</a> */}
            <div className={style.flex_grow}></div>
            <a className={style.desktop_nav_link} href="https://www.gracebrunei.com">Home</a>
            <Link className={style.desktop_nav_link} to="/">Tours</Link>
            <a className={style.desktop_nav_link} href="https://www.gracebrunei.com/about-us">About Us</a>
            <a className={style.desktop_nav_link} href="http://www.gracebrunei.com/contact/">Contact Us</a>
            <a className={style.desktop_nav_link} href="http://cn.gracebrunei.com">中文</a>
            {/* <Link className={style.desktop_nav_link} href="/">English</Link> */}
            {/* <a className={style.desktop_nav_link} href="#">Chinese</a> */}
          </div>
        </div>
      )
    )
  }
}


export default Nav

