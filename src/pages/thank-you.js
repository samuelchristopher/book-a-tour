import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import styles from "./thankyou.module.css"

const ThankYou = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Thank You | Grace Travel</title>
            </Helmet>
            <header>
                <h1 className="shifted-to-the-right">Thank you for <br />choosing<br /> Grace Travel <br /> Agency</h1>
                <p className={`${styles.thankYou__tagline} shifted-to-the-right tagline`}>We will be in touch with you within 24 hours, we look forward to taking you on the tour!</p>
            </header>
            <div className={styles.thankYou__logo}></div>
        </Layout>
    )
}


export default ThankYou
