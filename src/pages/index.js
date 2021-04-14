import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from "../components/Reusable/Herosection"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
     img = {data.img.childImageSharp.fluid}
     title = "eCommerce" 
     subtitle = "Welcome To Our website" 
     heroclass = "hero-background"/>
     <Coursecart courses = {data.items} />
     <Dualinfoblock heading = "Our Team" />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "E-commerce.jpeg" }){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  items: allContentfulItems {
    edges {
      node {
        id
        title
        price
        category
        description {
          description
        }
        image {
          fixed(width:200, height:200){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`
export default IndexPage
