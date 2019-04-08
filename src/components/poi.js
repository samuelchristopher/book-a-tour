import React from "react"
import Letterhead from "./letterhead"
import POISingle from "./poiSingle"
import styles from "./poiSingle.module.css"

const POI = ({ poi, poiObject, isSecond }) => {
    
    let poiItems = poi.map((itemKey, key) => {
        let poiItem = poiObject[itemKey]
        return <POISingle { ...poiItem } key={key}/>
    })
    return  (
        <div className="page container">
            <Letterhead />
            {isSecond ? <div className={styles.spaceTop} />: <h1 className={styles.pageHeader}>Places of Interest</h1>}
            <div className={styles.poiContainer}>
                { poiItems }
            </div>
        </div>
    )
}

export default POI