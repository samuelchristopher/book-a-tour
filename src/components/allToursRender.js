import React from "react"
import TourCard from "./tourCard"


const allToursRender = ({ data }) => {
    let tourCards = data.allMarkdownRemark.edges.map((tourCard, key) => {
        return <TourCard title={tourCard.node.frontmatter.title} link={tourCard.node.frontmatter.path} key={key} />
    })

    return (
        <div>
            <header>
                <h1 className="capitalize__heading">All tours</h1>
                <p className="shifted-to-the-right tagline">Find the package that is perfect for you</p>
            </header>
            <div className="tour-cards-container">
                {tourCards}
            </div>
        </div>
    )
}

export default allToursRender