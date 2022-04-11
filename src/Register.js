import React, { useState  } from 'react'
import { useRef } from "react"
import emailjs from '@emailjs/browser';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const usrInputRef = useRef();
    const pwdInputRef = useRef();
    const [validation , setValidation ] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
        const userdata = {
            user: usrInputRef.current.value,
            pwd: pwdInputRef.current.values
        }
        // console.log(userdata)
        emailjs.sendForm('service_oz6ymzo', 'template_5n6tvzw', e.target, '76uOt0XsZdyXXAAPb')
        .then((result) => {
            console.log(result.text);
            alert('User registration is  successful')
        }, (error) => {
            console.log(error.text);
            alert('User registration is not successful')
        });
        
        fetch('https://email-activation-6cdf1-default-rtdb.firebaseio.com/users.json',
            {
                method: 'POST',
                body : JSON.stringify(userdata),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
       
    }
    const EmailvalidationHandler = (e) => {
        console.log(e.target.value)
        const pattern = /^[A-Za-z._1-9]{3,16}@[A-Za-z]{3,9}[.]{1}[A-Za-z]{3,6}$/
        let result = pattern.test(e.target.value)
       
        if (!result) {
            const variable = <span className='error'>Email is not Valid</span>
            setValidation(variable)
        }
        else {
            const variable = null;
            setValidation(null)
        }
    }
    const loginHandler = () => {
        navigate("/login")
}

 
    
    return (
        <div className='actions'>
            <button className='btn actions-login' onClick={loginHandler}>Login</button>
        <div className='register'>
            
            <form onSubmit={(e)=>submitHandler(e)} >
                <h1> Registration</h1>
                <div className='control'>
                         <label htmlFor='name' > Username </label>
                        <input type="username" placeholder='Enter Username' name="user" id='name' ref= {usrInputRef}  required/>
                </div>
                <div className='control'>
                         <label htmlFor='email' > Email </label>
                        <input type="email" placeholder='Enter Email' name="email" id='email'onChange={(e)=>EmailvalidationHandler(e)} required/> 
                  {validation ?  validation: null}
                </div>
                <div className='control'>
                    <label htmlFor='pwd' >
                        Password
                    </label> 
                        <input type="password" placeholder='Enter Password ' id='pwd' name="pwd" ref = {pwdInputRef}  required/>
                </div>
                <div  className='actions'>
                        <button className='btn'> Register</button>
                </div>
            </form>
      
            </div>
            </div>
  )
}

export default Register
