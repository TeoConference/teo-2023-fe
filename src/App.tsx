import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Form from 'pages/Form'
import 'styles/global.css'

function App() {
  return (
    <Router basename={'/teo-2023-fe'}>
      <Routes>
        <Route path="/" element={<div>Hommie</div>} />
        <Route path="/form" element={<Form />} />
        <Route path="/r1" element={<div>r1</div>} />
      </Routes>
    </Router>
  )
}

export default App
