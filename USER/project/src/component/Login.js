import React from 'react'
import { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'
const Login=()=>{
  // window.location.reload()
    const auth=useAuth()
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [lis,setLis]=useState(true)
    const change=(event)=>{
        setEmail(event.target.value)
    }
    const changepassword=(event)=>{
      setPassword(event.target.value)
  }
    const handlelogin=(event)=>{
      console.log(auth.userlist)
      auth.userlist.map(x=>{
        if(x.email===email && x.password===password){
          auth.login(email)
          navigate('/Loginsuccess')
          setLis(true)
        }
        else{
          setLis(false)
        }
        
      })
      event.preventDefault()


    }
  return (
    <div className='image'>
      <div className='login'>
      <form onSubmit={handlelogin} className='login-form'>
        <h9>LOG IN</h9><br></br>
      <label>Email</label><br></br>
       <input type ='email' value={email} onChange={change} required placeholder='Email'/> <br></br>
       <label>Password</label><br></br>
       <input type='password' value={password} onChange={changepassword} required placeholder='Password'/><br></br>
      <button   type='submit' >Login</button>
       {!lis?<p>Invalid User or Password</p>:''}
       <h3>if you don't have account</h3>
       <a href='/Signup'>Signup</a>
       <br></br><br></br><br></br><br></br><br></br>
       <br></br><br></br><br></br><br></br><br></br>
       <br></br>
       </form>

       </div>
   </div>
    
    
  )
}

export default Login