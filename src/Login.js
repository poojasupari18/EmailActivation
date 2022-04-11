import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login() {
    const navigate = useNavigate()
    const [userDb, setUserDb] = useState({})
    const [uservariable, setUserVariable] = useState(null);
    const [pwdvariable , setPwdVariable] = useState(null)
    const usrInputRef = useRef();
    const pwdInputRef = useRef(); 
    const submitHandler = (e) => {
        e.preventDefault();
        const newuser = usrInputRef.current.value;
        const newpwd = pwdInputRef.current.value;
        let userCheck = userDb.some((key) => key.user === newuser)
        if (userCheck) {
            let pwdCheck = userDb.some((key) => key.pwd === newpwd)
            if (!pwdCheck) {
                setPwdVariable(<span className='error'> Password is not Correct</span>)
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


  return (
    <div>
               <button className='btn actions-register' onClick={()=>navigate("/")}>Register</button>
          <div className='login'>
            
            <form onSubmit={(e)=>submitHandler(e)} >
                <h1> Login </h1>
                <div className='control'>
                         <label htmlFor='name' > Username </label>
                
                        <input type="username" placeholder='Enter Username' name="user" id='name' ref= {usrInputRef}  required/>
                {uservariable ? uservariable : null}
                  </div>
                <div className='control'>
                    <label htmlFor='pwd' >
                        Password
                    </label> 
                        <input type="password" placeholder='Enter Password ' id='pwd' name="pwd" ref = {pwdInputRef}  required/>
                        {pwdvariable ? pwdvariable : null}
                  </div>
                <div  className='actions'>
                      <button className='btn'> Login</button>     
                  </div>
                  <div>
                      {uservariable ? <button className='register-link'><a href='/'> Register ?</a></button>: null }
                  </div>
            </form>
      
            </div>
    </div>
  )
}

export default Login
