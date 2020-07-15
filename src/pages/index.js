import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

export default function Home({data}) {
  return (
    <>
      <Img fluid={data.testImage.childImageSharp.fluid}
           style={{maxWidth: '300px'}}
      />
      <Link to='page-2'>Page 2</Link>
    </>
  )
}

export const query = graphql`
  {
    testImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
