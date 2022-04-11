import React, { useContext } from 'react'
import { Routes, Route , BrowserRouter } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Users from './Users'
import MainPage from './MainPage'
import { DataContext } from './DataContextProvider'
import ProtectedRoute from './ProtectedRoute'
import Profile from './Profile'
function MainRouter() {
  const {authenticate} = useContext(DataContext)
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          <Route element={<ProtectedRoute isAuth={authenticate}/>}>   
         
          <Route path='/users' element={<Users />} />
            <Route path='/mainpage' element={<MainPage />} />
            <Route path='/profile' element={ <Profile/>}/>
            </Route> 
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default MainRouter
