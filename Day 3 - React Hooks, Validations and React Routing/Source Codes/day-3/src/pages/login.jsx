import React from 'react'
import { NavLink } from 'react-router-dom'

function login() {
  return (
    <div>
      <h1>Login</h1>
      <NavLink to="/">Home</NavLink>
    </div>
  )
}

export default login