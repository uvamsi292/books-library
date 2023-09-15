import React  from 'react'
import { Link } from 'react-router-dom'
import {Outlet} from 'react-router-dom'
const Product = ()=>{
    return (
      <div>
        <input type='search' placeholder='search'/>
        <nav>
            <Link to="new">New</Link>
            <Link to="best">best</Link>
        </nav>
        <Outlet/>
      </div>
    )
  }

export default Product