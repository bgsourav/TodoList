import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div id="nav_container">
            <nav className="main-nav">
                <div className="logo">
                    <h3>Todolist</h3>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active_class" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active_class" to="/events">Events</NavLink>
                        </li>
                        <li>
                            {/* <a href="/components/contactform.html">Contact US</a> */}
                            <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
