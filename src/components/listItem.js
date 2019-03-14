import React from "react"
import styles from "./list.module.css"

class ListItem extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false
        }

        this.toggleOpen = this.toggleOpen.bind(this)
    }

    toggleOpen() {
        let { open } = this.state
        this.setState({
            open: !open
        })
    }
    render() {
        let { title, desc } = this.props
        return (
          <div className={styles.list__item}>
            <div onClick={this.toggleOpen} className={styles.list__topSection}>
              <div className={styles.list__iconDot} />
              <div className={styles.list__title}>{ title }</div>
                    <div className={this.state.open ? `${styles.rotate} ${styles.list__expandArrow}`: styles.list__expandArrow} />
            </div>
            { this.state.open ?
            <p className={styles.list__description}>{ desc }</p> : ''}
          </div>
        )
    }
}

export default ListItem