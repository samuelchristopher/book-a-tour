import React from "react"
import styles from "./block.module.css"

import Block from './block'

const flyerBlocks = ({ blocks }) => {
    let allBlocks = Object.keys(blocks).map((itemKey, key) => {
        let blockItem = blocks[itemKey]
        return <Block data={blockItem} key={key}/>
    })
    return (
        <div className={styles.blocks__container}>
            { allBlocks }
        </div>
    )
}

export default flyerBlocks