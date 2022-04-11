import React from 'react'
import { Outlet } from 'react-router-dom'

function ProtectedRoute(props) {
    console.log(props.isAuth)
    
  return  props.isAuth ? <Outlet/> : <p> User not authenticated</p>
          
    
  
}

export default ProtectedRoute
