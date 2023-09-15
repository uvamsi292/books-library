import React from 'react'
import './profile.css';
import {useAuth} from './auth'
export const Profile = () => {
    const auth=useAuth()
    const handlelogout=()=>{
        auth.logout()
    }
  return (
    <div className="profile">
      <div className='prof'>
        <h1>Hi!... <span id="wel">Welcome User</span></h1>   
        <button onClick={handlelogout}>Logout</button>
        </div>
      <img id="profileimg" src="pimg.png"/>
    </div>
  )
}