/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wid: ''
        }
    }
    openNav = () => {
        this.setState({
            wid: '100%'
        })
    }
    closeNav = () => {
        this.setState({
            wid: '0%'
        })
    }
    render() {
        return (
            <div>
                <header>
                    <NavLink exact to="/"><img className="nav-img" src="/media/cc_logo.png" alt="logo" /></NavLink>
                    <nav>
                        <ul className="nav__links">
                            <li>
                                <NavLink exact to="/">Events</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/">Members</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/">Contact Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <p onClick={this.openNav} className="menu cta">Menu</p>
                </header>

                <div style={{ width: this.state.wid }} className="overlay">
                    <a className="close" onClick={this.closeNav}>&times;</a>
                    <div className="overlay__content">
                        <NavLink exact to="/">Events</NavLink>
                        <NavLink exact to="/">Projects</NavLink>
                        <NavLink exact to="/">Members</NavLink>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;