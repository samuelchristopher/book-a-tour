import React from "react"
import styles from "./home.module.css"

export default () => (
    <header className={styles.home__container}>
        <div className={styles.home__heroContainer}>
            <h1>Grace <br /> Travel <br /> Agnecy <br /> Tours
        </h1>
            <div className={styles.home__heroLogo}> </div>
        </div>
        <p className="tagline">You are on your way to booking a tour! <br /> Please fill in the details below</p>
        <div className={styles.home__inputContainer}>
            <input type="number" name="adults" placeholder="How many adults?" />
            <input type="number" name="children" placeholder="How many children?" />
            <input type="number" name="days" placeholder="How many days?" />
        </div>
        <div className="center-button">
            <button onClick="#">view tours</button>
        </div>
    </header>
)