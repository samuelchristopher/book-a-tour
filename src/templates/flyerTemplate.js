import React from "react"
import { graphql } from "gatsby"

// flyer components
import FlyerTop from "../components/flyerTop"
import FlyerHeader from "../components/flyerHeader"
import FlyerQuickInfo from  "../components/flyerQuickInfo"
import FlyerBlocks from "../components/flyerBlocks"
import FlyerBottom from "../components/flyerBottom"

export default function Template({
    data,
}) {
    const { markdownRemark } = data
    const { frontmatter } = markdownRemark
    
    return (
        <div {...frontmatter}>
            <FlyerTop {...frontmatter}/>
            <FlyerHeader {...frontmatter}/>
            <FlyerQuickInfo {...frontmatter}/>
            <FlyerBlocks {...frontmatter}/>
            <FlyerBottom />
        </div>
    )
}

export const pageQuery = graphql`
         query($path: String!) {
           markdownRemark(frontmatter: { path: { eq: $path } }) {
             frontmatter {
               title
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
             }
           }
         }
       `