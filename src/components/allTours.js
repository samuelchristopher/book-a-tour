import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AllToursRender from "../components/allToursRender"

const allTours = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    allMarkdownRemark {
                        edges {
                            node{
                                frontmatter {
                                    title
                                    path
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <AllToursRender data={data} />
            )}
        />
    )
}


export default allTours
