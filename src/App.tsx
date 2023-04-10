import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Card from 'pages/Card'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Router>
  )
}

export default App
