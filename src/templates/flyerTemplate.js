import React from "react"
import { graphql } from "gatsby"

// flyer components
import FlyerTop from "../components/flyerTop"
import FlyerHeader from "../components/flyerHeader"
import FlyerQuickInfo from  "../components/flyerQuickInfo"
import FlyerBlocks from "../components/flyerBlocks"
import FlyerBottom from "../components/flyerBottom"

import POI from "../components/poiRender"

export default function Template({
    data,
}) {
    const { markdownRemark } = data
    const { frontmatter } = markdownRemark
    
    return (
        <div>
            <div className="page">
              <FlyerTop {...frontmatter}/>
              <FlyerHeader {...frontmatter}/>
              <FlyerQuickInfo {...frontmatter}/>
              <FlyerBlocks {...frontmatter}/>
              <FlyerBottom />
            </div>
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
             }
           }
         }
       `