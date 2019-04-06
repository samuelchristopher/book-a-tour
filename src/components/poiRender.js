import React from "react"
import POI from "./poi"

const POIRender = ({ poi }) => {
    let array = Object.keys(poi)
    let firstSixItems = array.splice(0, 6)
    let otherItems = array
    return (
        <div>
            <POI poi={ firstSixItems } poiObject={poi}/>
            {otherItems ? <POI isSecond={true} poi={otherItems} poiObject={poi} />: ''}
        </div>
    )
}

export default POIRender