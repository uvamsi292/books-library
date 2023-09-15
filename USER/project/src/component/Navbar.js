import React from 'react'
import './A.css';
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'
export const Navbar = () => {
  const auth=useAuth()
  return (
    <div >
      <header>
      <div className='img12'>
        <img src={'logo.png'}/>
        <h5 className='b'>BOOKLIBRARY</h5>
        </div>
        <div className='nav1'>
            <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Service">Reviews</NavLink>
            {/* <NavLink to="/Product">Product</NavLink> */}
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {!auth.user &&
            <NavLink to="/login">Login</NavLink>}
          </nav>
        </div>
        </header>
    </div>

  )
}