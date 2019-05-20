import React from "react"
import styles from "./tour-card.module.css"
import { Link } from "gatsby"

const TourCard = ({ title, link, img }) => {
    return (
        <div className={styles.tourCard}>
            <div className={styles.tourCard__pushDown}></div>
            <div className={styles.tourCard__infoContainer}>
                <div className={styles.tourCard__title}>{ title}</div>
                <Link className={styles.tourCard__learnMoreButton} to={link}>learn more</Link>
            </div>
            <div className={styles.tourCard__bgBlur}></div>
            <img alt="" className={styles.tourCard__bgImage} src={img} />
        </div>
    )
}

export default TourCard