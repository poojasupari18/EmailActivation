import React, { createContext, useEffect, useState } from 'react'
export const DataContext = createContext();


function DataContextProvider(props) {
    
    const [userDb, setUserDb] = useState({})
    const [uservariable, setUserVariable] = useState(null);
    const [pwdvariable, setPwdVariable] = useState(null);
    const [authenticate , setAuthenticate] = useState(false)
    const [userProfile , setUserProfile] = useState([])

    const checkAuthentication = (userdata) => { 
        let userCheck = userDb.some((key) => key.user === userdata.user)
  
        if (userCheck) {
            
            let pwdCheck = userDb.some((key) => key.pwd === userdata.pwd)
            if (!pwdCheck) {
                setPwdVariable(<span className='error'> Password is not Correct</span>)
            }
            else {
                setAuthenticate(true)
               
                let checkMail = userDb.filter((key) => key.user === userdata.user)
               
                
                const profile =
                {
                    newUser: userdata.user,
                    newPwd: userdata.pwd,
                    newEmail : checkMail[0].email
                    }
                setUserProfile(profile)
            }
           
        }
     

        if (!userCheck) {
            setUserVariable(
                <div>
                    <span className='error'>User is not Registered</span>
                </div>)
        }
    }
 
    useEffect(() => {
        fetch('https://email-activation-6cdf1-default-rtdb.firebaseio.com/users.json')
            .then((result) => {
             return result.json()
            })
            .then((data) => {
                const userList = []
                for (const key in data) {
                    const userdata = {
                        id: key,
                        ...data[key]
                    }
                 userList.push(userdata)
                }
                setUserDb(userList)
              
            
        })
    
    }, [])
   

    const data = {
        checkAuthentication: checkAuthentication,
        uservariable: uservariable,
        pwdvariable: pwdvariable,
        authenticate: authenticate,
        userProfile: userProfile
}
  return (
      <div>
          
          <DataContext.Provider value = {data}>
              {props.children}
          </DataContext.Provider>
      
    </div>
  )
}

export default DataContextProvider
