import React from "react"
import { NavLink } from "react-router-dom"

function Header() {
  const activeStyle = { color: "red" }
  return (
    <nav className="p-2">
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/courses">
        Courses List
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
    </nav>
  )
}

export default Header
