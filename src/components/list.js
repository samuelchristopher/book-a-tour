import React from "react"
import styles from "./list.module.css"
import ListItem from "./listItem"

const List = () => {
    return (
        <div className={`${styles.itinerary__listContainer} ${styles.list__expandContainer}`}>
            {/* <div className={styles.list__expandAll}>Expand all</div> */}
            <ListItem />
        </div>
    )
}

export default List