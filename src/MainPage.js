import React from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'

function MainPage() {
    const navigate = useNavigate()
  return (
    <div>
          <h1>Main Page</h1>
          <div className='actions'>
              <button className='btn mainbtns' onClick={() => navigate("/users")}>Users</button>
              <button className='btn mainbtns' onClick={()=>navigate("/profile")}>Profile</button>
          </div>
    </div>
  )
}

export default MainPage
