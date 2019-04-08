import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

// flyer components
import FlyerTop from "../components/flyerTop"
import FlyerHeader from "../components/flyerHeader"
import FlyerQuickInfo from  "../components/flyerQuickInfo"
import FlyerBlocks from "../components/flyerBlocks"
import FlyerBottom from "../components/flyerBottom"
import Itinerary from "../components/itinerary"

import POI from "../components/poiRender"

export default function Template({
    data,
}) {
    const { markdownRemark } = data
    const { frontmatter } = markdownRemark
    
    return (
        <div>
            <Helmet>
              <meta charSet="utf-8" />
              <title>{ frontmatter.title } | Grace Travel</title>
            </Helmet>
            <div className="page">
              <FlyerTop {...frontmatter}/>
              <FlyerHeader {...frontmatter}/>
              <FlyerQuickInfo {...frontmatter}/>
              <FlyerBlocks {...frontmatter}/>
              <FlyerBottom />
            </div>
            <Itinerary {...frontmatter}/>
            <POI {...frontmatter}/>
        </div>
    )
}

export const pageQuery = graphql`
         query($path: String!) {
           markdownRemark(frontmatter: { path: { eq: $path } }) {
             frontmatter {
               title
               titledays
               path
               price
               pricedesc
               headerimg
               headertitle
               headerdesc
               tourcode
               quickinfo {
                 icon
                 text
               }
               blocks {
                 title
                 blockitems
               }
               poi {
                 desc
                 image
                 title
               }
              itinerary {
                daynumber
                daytitle
                mealsincluded
                items {
                  bold
                  notbold
                }
              }
             }
           }
         }
       `