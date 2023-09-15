import React, { Component } from 'react'
import './Hom.css';
export class Hom extends Component {
  render() {
    return (
      <div>
        <div className='main'>
          <div className='m1'>
            <h2>WELCOME TO<br></br><span className='m2'>BOOK STORE</span></h2>
            <p>
            Welcome to our BOOK LIBRARY! Welcome and greetings!
            We promise to not disappoint you with our finely crafted products! 
            Warm welcome to our little store!
            Your presence is an absolute delight for us, and we are happy as ever to serve you!
            </p>
            <div className='m3'>
            <a href="#LearnMore">Learn More</a></div>
          </div>
          <div className='img22'></div>
        </div>
      </div>
    )
  }
}

export default Hom