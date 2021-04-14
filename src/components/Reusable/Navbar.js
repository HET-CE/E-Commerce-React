import React, { Component } from 'react'
import { Link } from 'gatsby'
// import { logo } from '../../images/logo.png'
import { FaCartArrowDown } from 'react-icons/fa'

export default class Navbar extends Component {

    state = {
        navbarState: false,
        navbarClass: "collapse navbar-collapse",
        menus: [{
            id: 1,
            text: "Home",
            url : "/"
        }, {
            id: 2,
            text: "About",
            url : "/about"
        }, {
            id: 3,
            text: "Services",
            url : "/services"
        }, {
            id: 4,
            text: "Contact",
            url : "/contact"
        }]
    }

    toggler = () => {
        this.state.navbarState ? this.setState({
            navbarState: false,
            navbarClass: "collapse navbar-collapse"
        }) : this.setState({
            navbarState: true,
            navbarClass: "collapse navbar-collapse show"
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-5" >
                    <img src="data:image/jpeg;base64,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"  alt="Logo" width="50px" />
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.toggler} >
                    <span className="text-white">menu</span>
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                        {this.state.menus.map((menu) => {
                            return (
                                <li key = {menu.id} className="nav-item">
                                    <Link to={menu.url} className="nav-link text-white">
                                        {menu.text}
                                    </Link>
                                </li>
                            )
                        })}

                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                                <FaCartArrowDown className="cart-icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}