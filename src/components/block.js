import React from "react"
import styles from "./block.module.css"

const block = ({ data }) => {
    let blockItems = Object.keys(data.blockitems).map((itemKey, key) => {
        let blockItem = data.blockitems[itemKey]
        return <li key={key} className={styles.block__item}>{ blockItem }</li>
    })
    return (
        <div className={styles.block}>
            <div className={styles.block__title}>{data.title}</div>
            <ul>
                { blockItems }
            </ul>
        </div>
    )
}

export default block