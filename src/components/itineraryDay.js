import React from "react"
import styles from "./itinerary.module.css"

const Day = ({ day }) => {
    let { daynumber, daytitle, items, mealsincluded } = day
    console.log(day)
    let dayItems = items.map((itemKey, key) => {
        let item = items[key]
        return (
            <div className={styles.dayItem}>
                
                {item.notbold === "-" ? '' : item.notbold }
                {item.bold === "-" ? '' : <b> {item.bold}</b> }
            </div>
        )
    })

    return (
        <div className={styles.day}>
            <p className={styles.dayHeading}>Day { daynumber } { daytitle }</p>
            <div className={styles.dayItemsContainer}>
                { dayItems }
                <div className={styles.meals}>
                    Meals Included: <b>{mealsincluded}</b>
                </div>
            </div>
        </div>
    )
}

export default Day