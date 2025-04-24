import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const navStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "10px",
        marginBottom: "#eee",
        borderRadius: "8px"
    };

    const linkStyle = {
        textDecoration: "none",
        fontWeight: "bold",
        color: "#333"
    };

    const activeStyle = {
        color: "#c62828"
    };

  return (
    <nav style={navStyle}>
   <NavLink to="/" style={linkStyle} activeStyle={activeStyle} end>Start</NavLink>
   <NavLink to="/Behandlung" style={linkStyle} activeStyle={activeStyle}>Behandlung</NavLink>
   <NavLink to="/Faq" style={linkStyle} activeStyle={activeStyle}>FAQ</NavLink>
   <NavLink to="/Contact" style={linkStyle} activeStyle={activeStyle}>Kontakt</NavLink>
   <NavLink to="/Impressum" style={linkStyle} activeStyle={activeStyle}>Impressum</NavLink>
   <NavLink to="/Pokemon/." style={linkStyle} activeStyle={activeStyle}>Pokemon</NavLink>


   </nav>

  )
}

export default Navbar
