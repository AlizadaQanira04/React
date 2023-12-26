import React from 'react'
import { NavLink } from 'react-router-dom'
import"./index.scss"
function Header() {
  return (
    <header>
        <div className="container">
            <div className="header">
                <div className="logo">
                    <h1>Products.</h1>
                </div>
                <nav>
                    <ul>
                        <li><NavLink  to={"/"}>Home</NavLink></li>
                        <li><NavLink  to={"about"}>About</NavLink></li>
                        <li><NavLink  to={"products"}>Products</NavLink></li>
                        <li><NavLink  to={"contact"}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header