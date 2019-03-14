import React from "react"
import { graphql } from "gatsby"

export default function Template({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    console.log(frontmatter, html)
    return (
        <div>
            <h1>{frontmatter.title}</h1>
        </div>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`