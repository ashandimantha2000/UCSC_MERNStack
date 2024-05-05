import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Myprofile from "./Myprofile";

function about() {
  return (
    <div>
        <h1>About</h1>
        <Routes>
            <Route path="profile" element={<Myprofile />} />
        </Routes>
    </div>
  )
}

export default about