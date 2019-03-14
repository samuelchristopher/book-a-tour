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
        return (
          <div className={styles.list__item}>
            <div onClick={this.toggleOpen} className={styles.list__topSection}>
              <div className={styles.list__iconDot} />
              <div className={styles.list__title}>introduction</div>
                    <div className={this.state.open ? `${styles.rotate} ${styles.list__expandArrow}`: styles.list__expandArrow} />
            </div>
            { this.state.open ?
            <p className={styles.list__description}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
            </p> : ''}
          </div>
        )
    }
}

export default ListItem