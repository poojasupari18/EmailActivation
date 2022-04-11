import React from 'react'
import { Routes, Route , BrowserRouter } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
function MainRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path = "/" element={<Register />} /> 
        <Route path = "/login" element={<Login />} /> 
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default MainRouter
