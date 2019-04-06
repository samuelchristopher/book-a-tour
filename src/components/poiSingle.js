import React from "react"
import styles from "./poiSingle.module.css"

const POISingle = ({ title, desc, image }) => (
  <div className={styles.poiSingleContainer}>
    <div className={styles.poiImage} style={{ backgroundImage: `url(${image})` }}/>
    <div className={styles.poiContent}>
      <p>
        <b className={styles.poiTitle}>{title}</b> - {desc}
      </p>
    </div>
  </div>
)

export default POISingle