import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import imported from '../images/gatsby-astronaut.png'

export default function Home({data}) {
  return (
    <>
      <h2>Imported</h2>
      <img src={imported}
           style={{maxWidth: '300px'}}
      />
      <h2>Gatsby-Image</h2>
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
