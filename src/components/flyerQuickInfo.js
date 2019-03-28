import React from "react"
import styles from "./flyerQuickInfo.module.css"

const flyerQuickInfo = ({ quickinfo }) => {
    let quickInfoItems = Object.keys(quickinfo).map((itemKey, key) => {
        let item = quickinfo[itemKey]
        return (
          <div key={key} className={styles.quickinfo__item}>
            <div className={styles.quickinfo__itemIcon} style={{backgroundImage: `url(${item.icon})`}}/>
            <div className={styles.quickinfo__itemText}>
              {item.text}
            </div>
          </div>
        )
    })
    return (
        <div className={styles.quickinfo__container}>
            { quickInfoItems }
        </div>
    )
}

export default flyerQuickInfo