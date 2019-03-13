import React from "react"
import styles from "./home.module.css"

export default ({ isDisabled, handleInputChange }) => (
    <header className={styles.home__container}>
        <div className={styles.home__heroContainer}>
            <h1>Grace <br /> Travel <br /> Agency <br /> Tours
        </h1>
            <div className={styles.home__heroLogo}> </div>
        </div>
        <p className="tagline">You are on your way to booking a tour! <br /> Please fill in the details below</p>
        <div className={styles.home__inputContainer}>
            <input onChange={handleInputChange} type="number" name="adults" placeholder="How many adults?" />
            <input onChange={handleInputChange} type="number" name="children" placeholder="How many children?" />
            <input onChange={handleInputChange} type="number" name="days" placeholder="How many days?" />
        </div>
        <div className="center-button">
            <button disabled={isDisabled} >view tours</button>
        </div>
    </header>
)