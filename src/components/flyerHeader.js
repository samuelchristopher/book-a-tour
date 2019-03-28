import React from "react"
import styles from "./flyerHeader.module.css"

const flyerHeader = ({ headertitle, headerdesc, headerimg }) => (
    <div className={styles.header__container}>
        <div className={styles.header__img} style={{ backgroundImage: `url(${headerimg})` }}></div>
        <div className={styles.header__contentContainer}>
            <div className={styles.header__title}>{ headertitle }</div>
            <div className={styles.header__desc}>{ headerdesc }</div>
        </div>
    </div>
)

export default flyerHeader