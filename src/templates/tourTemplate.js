import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Details from "../components/details"

export default function Template({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    // const { title, starts, ends, destinations, highlights, minage, mingroup, travelstyle, itinerary_url: itineraryUrl, itinerary: itineraryList, imgone, included, not_included: notIncluded } = frontmatter
    const { title, starts, ends, destinations, highlights, minage, mingroup, travelstyle, itinerary_url: itineraryUrl, itinerary: itineraryList, imgone } = frontmatter
    return (
        <Layout>
            <Details imgone={imgone} itineraryList={itineraryList} itineraryUrl={ itineraryUrl } minage={ minage } mingroup={ mingroup } travelstyle={ travelstyle } starts={ starts } title={ title } ends={ ends } destinations={ destinations } highlights={highlights}/>
            {/* <Details included={included} notIncluded={notIncluded} imgone={imgone} itineraryList={itineraryList} itineraryUrl={ itineraryUrl } minage={ minage } mingroup={ mingroup } travelstyle={ travelstyle } starts={ starts } title={ title } ends={ ends } destinations={ destinations } highlights={highlights}/> */}
        </Layout>
    )
}

export const pageQuery = graphql`
    query TourByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                starts
                ends
                destinations
                highlights
                minage
                mingroup
                travelstyle
                itinerary_url
                itinerary {
                    desc
                    title
                }
                imgone
            }
        }
    }
`