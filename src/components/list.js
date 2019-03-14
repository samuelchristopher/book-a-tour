import React from "react"
import styles from "./list.module.css"
import ListItem from "./listItem"

const List = ({ listItems }) => {
    const ListItems = listItems.map( listItem => {
        let { desc, title } = listItem
        return <ListItem desc={desc} title={title} />
    })
    return (
        <div className={`${styles.itinerary__listContainer} ${styles.list__expandContainer}`}>
            {/* <div className={styles.list__expandAll}>Expand all</div> */}
            { ListItems }
        </div>
    )
}

export default List