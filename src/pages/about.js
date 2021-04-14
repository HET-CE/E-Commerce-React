import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from "../components/Reusable/Herosection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import TeamPhoto from "../components/About/TeamPhoto"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
     img = {data.img.childImageSharp.fluid}
     title = "Abouts Us" 
     subtitle = "" 
     heroclass = "about-background"/>
     <Dualinfoblock heading = "" />
     <Infoblock heading = "About our Vision" />
     <TeamPhoto />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about.png" }){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default AboutPage
