import React from "react"
import { graphql } from "gatsby"

const Results = ({ data }) => {
    return (
        <div>
            {data.allMarkdownRemark.totalCount}
        </div>
    )
}

export const pageQuery = graphql`
query ResultsQuery {
  allMarkdownRemark(filter: {
      frontmatter: {minage: {eq: 2}}
    }) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          path
        }
      }
    }
  }
}
`

export default Results