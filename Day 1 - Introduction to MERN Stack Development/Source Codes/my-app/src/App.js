import React from 'react'
import Hello from './components/Hello'
import './App.css'
import States from './components/States'
import Form from './components/Form'
import CreativeForm from './components/CreativeForm'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav />
      <Hello
      name="Ashan"
      age="23"
      email="ashandimanthalk@gmail.com"/>
      <States />
      <Form name="Name"/>
      <Form name="Age"/>
      <br />
      <CreativeForm />
    </div>
  )
}

export default App