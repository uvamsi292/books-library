import React from 'react'
import { Outlet } from 'react-router-dom'

export const User = () => {
  return (
    <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
        <Outlet/>
    </div>
  )
}