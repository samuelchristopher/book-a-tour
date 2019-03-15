import React from "react"
import styles from "./tour-card.module.css"
import { Link } from "gatsby"

const TourCard = ({ title, link }) => {
    return (
        <div className={styles.tourCard}>
            <div className={styles.tourCard__pushDown}></div>
            <div className={styles.tourCard__infoContainer}>
                <div className={styles.tourCard__title}>{ title}</div>
                <Link className={styles.tourCard__learnMoreButton} to={link}>learn more</Link>
            </div>
            <div className={styles.tourCard__bgBlur}></div>
            <img className={styles.tourCard__bgImage} src="https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80" />
        </div>
    )
}

export default TourCard