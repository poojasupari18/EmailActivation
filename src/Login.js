import React, { useContext, useState } from 'react'
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContextProvider';
function Login() {
    const {checkAuthentication , uservariable , pwdvariable , authenticate} = useContext(DataContext)
    const navigate = useNavigate()
   
    const usrInputRef = useRef();
    const pwdInputRef = useRef(); 
    const submitHandler = (e) => {
        e.preventDefault();
        const newuser = usrInputRef.current.value;
        const newpwd = pwdInputRef.current.value;
        const userdata = {
            user: newuser,
            pwd : newpwd
        }
        checkAuthentication(userdata)
        if (authenticate) {
          navigate("/mainpage")
        }
       
      
    }

    


  return (
    <div>
               <button className='btn actions' onClick={()=>navigate("/")}>Register</button>
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
                <div  >
                      <button className='btn'  > Login</button>     
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
