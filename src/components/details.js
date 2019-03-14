import React from "react"
import styles from "./details.module.css"
import List from "./list"

const Details = ({ title, starts, ends, destinations, highlights, minage, mingroup, travelstyle, itineraryUrl, itineraryList }) => {
    return (
        <div>
            <header>
                <h1 className="capitalize__heading">{ title }</h1>
                <p className={`${styles.detailsTagline} shifted-to-the-right tagline`}>3 Adults, 2 Children, 1 Day</p>
            </header>
            <img className={styles.details__bigImage} src="https://images.unsplash.com/photo-1491905420573-0d1bdfd6436a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=889&amp;q=80" />
            <div className={styles.details__dotsContainer}>
                <div className={styles.dots__titles}>
                    <div className="yellow-caps">starts</div>
                    <div className="yellow-caps">destinations</div>
                    <div className="yellow-caps">end</div>
                </div>
                <div className={styles.dots__actualDotsContainer}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.dots__infoContainer}>
                    <div className={styles.dots__info}>{ starts }</div>
                    <div className={styles.dots__info}>+{ destinations }</div>
                    <div className={styles.dots__info}>{ ends }</div>
                </div>
            </div>
            <div className={styles.details__highlightsContainer}>
                <img className={styles.highlights__image} src="https://images.unsplash.com/photo-1443041124825-58b8f08ee398?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" />
                <h3 className={`${styles.highlightsHeading} ${styles.details__heading}`}>Highlights</h3>
                <p className={styles.highlights__p}>{ highlights }</p>
                <div className={styles.highlights__infoContainer}>
                    <div className={styles.highlights__titles}>
                        <div className={`yellow-caps ${styles.highlights__infoTitle}`}>age range</div>
                        <div className={`yellow-caps ${styles.highlights__infoTitle}`}>group size</div>
                        <div className={`yellow-caps ${styles.highlights__infoTitle}`}>travel style</div>
                    </div>
                    <div className={styles.highlights__content}>
                        <div className={styles.highlights__infoContent}>Min. { minage } year old</div>
                        <div className={styles.highlights__infoContent}>Min. { mingroup } person</div>
                        <div className={styles.highlights__infoContent}>{ travelstyle }</div>
                    </div>
                </div>
            </div>
            <div className={styles.details__itineraryContainer}>
                <img className={styles.itinerary__image} src="https://images.unsplash.com/photo-1471973772471-ecd9cf9eb04e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" />
                <h3 className={`${styles.itinerary__heading} ${styles.details__heading}`}>Itinerary</h3>
                <a className={styles.itinerary__download} href={`${itineraryUrl}`} target="__blank">Download PDF Brochure</a>
                <List listItems={itineraryList}/>
            </div>
        </div>
    )
}

export default Details