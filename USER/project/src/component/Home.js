import React, { Component } from 'react'
import Hom from './Hom'
import A from './abot'
import C from './digital'
import B from './review'
import Child from './footer'
export class Home extends Component {
  render() {
    return (
      <div>
        {/* <h1>Home page</h1> */}
        <Hom/>
        <A/>
        <C/>
        <B/>
        <Child/>
      </div>
    )
  }
}

export default Home



