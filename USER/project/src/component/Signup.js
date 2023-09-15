import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
const Signup=()=>{
    const[email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[userBool,setUserBool]=useState(false)
    const auth=useAuth()
    const navigate=useNavigate()
    const handleSignup=(event)=>{const userTaken=auth.userlist.some(x=>x.email===email)
        if(userTaken){
            setUserBool(true)
        }
        else{
            auth.Signup(email,password,firstName,lastName)
            navigate('/Signupsuccess')
        }
        event.preventDefault()
    }
    const change=(event)=>{
        setEmail(event.target.value)
    }
    const changepassword=(event)=>{
        setPassword(event.target.value)
    }
    return(
        
    
    <div  className="sign">
        <div>
            
        <form onSubmit={handleSignup} className="signup-form"><h1 id="up">SIGN UP</h1>
        <label>First Name</label><br></br>
        <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} required placeholder='FirstName'/><br></br>
        <label>Last Name</label><br></br>
        <input  value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required placeholder='LastName'/><br></br>
        <label>Email</label><br></br>
        <input type="email" value={email} onChange={change} required placeholder='Email'/><br></br>
        <label>Password</label><br></br>
        <input type="password" value={password} onChange={changepassword} required placeholder='Password'/>
        
        <br></br>
        {userBool?<p>Email is already exist</p>:""}
        <button type='submit'>Signup</button></form>
        </div>
      <img id="signupimg" src={'simg.png'} alt='img'/>
    </div>
    )

}
export default Signup