import React from "react"
import Letterhead from "./letterhead"
import Day from "./itineraryDay"

const Itinerary = ({ itinerary }) => {
    let days = itinerary.map((dayKey, key) => {
        let day = itinerary[key]
        return <Day day={day} key={key}/>
    })

    return (
        <div className="page container">
            <Letterhead />
            <div className="page-content-container">
                <h1 className="page-title">Tour Itinerary</h1>
                <div className="itinerary-list">
                    { days }
                </div>
            </div>
        </div>
    )
}

export default Itinerary