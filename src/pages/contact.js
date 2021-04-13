import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from "../components/Reusable/Herosection"
import Infoblock from "../components/Reusable/Infoblock"
import Contact from "../components/Contact/Contact"

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
     img = {data.img.childImageSharp.fluid}
     title = "Contact Us" 
     subtitle = "" 
     heroclass = "about-background"/>
     <Infoblock heading = "How can I help you" />
     <Contact />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "contact.png" }){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default ContactPage
