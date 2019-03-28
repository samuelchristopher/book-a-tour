import React from "react"
import styles from "./flyerTop.module.css"

const flyerTop = ({ price, pricedesc, title }) => {
    let priceDescItems = Object.keys(pricedesc).map((id, key) => {
        let itemText = pricedesc[id]
        return <div className={styles.pricedesc} key={key}>{itemText}</div>
    })
    return (
      <div className={styles.top__container}>
        <div className={styles.letterhead__container}>
            <div className={styles.letterhead__logo} />
            <div className={styles.letterhead__content}>
                <p className={styles.letterhead__companyName}>grace travel agency</p>
                <p className={styles.letterhead__address}>unit 3 & 4, Wong Siew Sing Building, Spg. 5, Jalan Gadong</p>
                <p className={styles.letterhead__address}>unit 3 & 4, Wong Siew Sing Building, Spg. 5, Jalan Gadong</p>
                <p>
                    Tel: {"+673-2424219"} Fax: {"+673-2424241"}
                </p>
                <p>Web: www.gracebrunei.com</p>
            </div>
            <div>
                <div className={styles.price__container}>
                    <div className={styles.price__from}>from</div>
                    <div className={styles.price__text}>B${price}</div>
                    <div className={styles.price__descContainer}>
                        { priceDescItems }
                    </div>
                </div>
                <div className={styles.arrow}></div>
            </div>
        </div>
        <h1 className={styles.flyer__title}>{ title }</h1>
      </div>
    )
}


export default flyerTop