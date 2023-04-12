import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Form from 'pages/Form'
import 'styles/global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  )
}

export default App
