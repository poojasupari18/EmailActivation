import React, { useContext } from 'react'
import { DataContext } from './DataContextProvider'

function Profile() {
    const {userProfile } = useContext(DataContext)
  return (
    <div>
          <h1> Profile</h1>
          <div> <b>UserName :</b> {userProfile.newUser}</div>
          <div><b> Email Id : </b> { userProfile.newEmail}</div>
          
    </div>
  )
}

export default Profile
