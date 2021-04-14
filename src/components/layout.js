import * as React from "react"
import PropTypes from "prop-types"

import Navbar from './Reusable/Navbar'
import Footer from './Reusable/Footer'
import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Navbar/>
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
