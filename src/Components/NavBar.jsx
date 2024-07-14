import React from 'react'

import logo from "../assets/logoTransparent.png"

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="Logo" />

        <div className="Links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
    </>
  )
}

export default NavBar