import React from 'react'
import { NavLink } from 'react-router-dom'


function Navigation() {
  return (
    <div>
        <h1>Navigation</h1>
        <h2>Home</h2>
        <NavLink to="/login">Login</NavLink>
        
    </div>
  )
}

export default Navigation