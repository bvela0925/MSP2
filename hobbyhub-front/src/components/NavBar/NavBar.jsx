import React, { useState} from "react";
//import { NavLink } from 'react-router-dom'
import './NavBar.css'
import Logo from '../../img/logo.webp'

const NavBar = () => {
//   const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }
  return (
    <nav>
    <img className="logoImg" src={Logo} alt="HobbyHUB custom logo shout out Ari!" />

    <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
      )
    }

export default NavBar