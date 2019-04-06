import React from "react"
import styles from "./flyerTop.module.css"

const LetterHead = () => (
    <div className={styles.top__container}>
        <div className={styles.letterhead__container}>
            <div className={styles.letterhead__logo} />
            <div className={styles.letterhead__content}>
                <p className={styles.letterhead__companyName}>grace travel agency</p>
                <p className={styles.letterhead__address}>unit 3 & 4, Wong Siew Sing Building, Spg. 5, Jalan Gadong</p>
                <p className={styles.letterhead__address}>Bandar Seri Begawan BE4119, Brunei Darussalam</p>
                <p>
                    Tel: {"+673 242424 / +673 2420555"} Fax: {"+673 2424219"}
                </p>
                <p>Website: www.gracebrunei.com</p>
            </div>
        </div>
    </div>
)

export default LetterHead