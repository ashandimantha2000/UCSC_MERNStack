import React from 'react'
import '../App.css'


function Hello(props) {
  return (
    <div className='App'>
        <h1>User Profile</h1>
        Hello <b>{props.name}</b>, from ReactJS.
        <br />
        You are {props.age} years old.
        <br />
        Your email is {props.email}
    </div>
  )
}

export default Hello