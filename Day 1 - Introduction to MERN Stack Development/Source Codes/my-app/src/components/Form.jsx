import React from 'react'

function Form(props) {
  return (
    <>
        <label>{props.name}: </label>
        <input type="text" />
        <br />
    </>
  )
}

export default Form