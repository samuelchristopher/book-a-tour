import React from "react"
import styles from "./details.module.css"
import List from "./list"
import Booking from "./booking"

class Details extends React.Component {
    render() {
        let { title, highlights, minage, mingroup, travelstyle, itineraryUrl, itineraryList, imgone, included, notIncluded, price, imgtwo, path } = this.props
        return (
            <div>
                <header>
                    <h1 className="capitalize__heading">{title}</h1>
                    {/* <p className={`${styles.detailsTagline} shifted-to-the-right tagline`}>3 Adults, 2 Children, 1 Day</p> */}
                </header>
                <div className={styles.img__container}>
                    <div className={styles.blur} 
                        style={{
                            backgroundImage: `url(${imgone})`
                        }}
                    />
                    <div className={styles.img} 
                        style={{
                            backgroundImage: `url(${imgone})`
                        }}
                    />
                </div>
                {/* <div className={styles.details__dotsContainer}>
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
            </div> */}
                <div className={styles.details__highlightsContainer}>
                    <h3 className={`${styles.highlightsHeading} ${styles.details__heading}`}>Highlights</h3>
                    <p className={styles.highlights__p}>{highlights}</p>
                    <div className={styles.highlights__infoContainer}>
                        <div className={styles.highlights__titles}>
                            <div className={`yellow-caps ${styles.highlights__infoTitle}`}>age range</div>
                            <div className={`yellow-caps ${styles.highlights__infoTitle}`}>group size</div>
                            <div className={`yellow-caps ${styles.highlights__infoTitle}`}>travel style</div>
                        </div>
                        <div className={styles.highlights__content}>
                            <div className={styles.highlights__infoContent}>Min. {minage} year old</div>
                            <div className={styles.highlights__infoContent}>Min. {mingroup} person</div>
                            <div className={styles.highlights__infoContent}>{travelstyle}</div>
                        </div>
                    </div>
                </div>
                {/* <img className={styles.highlights__image} src={imgtwo} /> */}
                <div className={styles.img__container}>
                    <div className={styles.blur}
                        style={{
                            backgroundImage: `url(${imgtwo})`
                        }}
                    />
                    <div className={styles.img}
                        style={{
                            backgroundImage: `url(${imgtwo})`
                        }}
                    />
                </div>
                <div className={styles.details__itineraryContainer}>
                    {/* <img className={styles.itinerary__image} src={imgthree} /> */}
                    <div className={styles.itinerary__headingContainer}>
                        <h3 className={`${styles.itinerary__heading} ${styles.details__heading}`}>Itinerary</h3>
                        {/* <div>
                            <a className={styles.itinerary__download} href={`${itineraryUrl}`} target="__blank">Download PDF Brochure</a>
                        </div> */}
                    </div>
                    <div className={styles.itinerary__listContainer}>
                        <List listItems={itineraryList} />
                    </div>
                </div>
                <div className={styles.details__includedContainer}>
                    <h3 className={`${styles.included__heading} ${styles.details__heading}`}>What's Included</h3>
                    <List listItems={included} tick={true} />
                </div>
                <div className={styles.details__notIncludedContainer}>
                    <h3 className={`${styles.notIncluded__heading} ${styles.details__heading}`}>not included</h3>
                    <List listItems={notIncluded} cross={true} />
                </div>
                <div className={styles.details__livePrice}>
                    <div className={styles.livePrice__priceContainer}>
                        <h4 className={styles.livePrice__heading}>Starting from:</h4>
                        <h2 className={styles.livePrice__price}>BND ${price}</h2>
                    </div>
                </div>
                <Booking tourTitle={title} tourPath={path}/>
            </div>
        )
    }
}

export default Details