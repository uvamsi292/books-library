import React, { Component } from 'react'
import './footer.css'
export class Child extends Component {
  render() {
    return (
        <footer>
            <div className='footermain'>
                  <div className='img'>
                     <img src={'./logo.png'}/>
                     {/* <h1>BOOKLIBRARY</h1> */}
                  </div>
                  <div className='tag'>
                     <h1>Quick Link</h1>
                     <a href="#">Home</a>
                     <a href="#">About us</a>
                     <a href="#">Featured</a>
                     <a href="#">Arrivals</a>
                     <a href="#">Reviews</a>
                     <a href="#">Blog</a>
                  </div>
                  <div className='tag'>
                     <h1>Contact Info</h1>
                     <a href="#">+91 7569540834</a>
                     <a href="#">+91 7569540834</a>
                     <a href="#">bookslibrary@gmail.com</a>
                  </div>
                  <div class="tag">
                    <h1>Follow us</h1>
                    <div class="social-links">
                        <a href="#">facebook</a>
                        <a href="#">twitter</a>
                        <a href="#">instagram</a>
                        <a href="#">linkedin</a>
                    </div>  
                </div>
                <div class="tag">
                    <h1>NewsLetter</h1>
                    <div class="Search">
                        <input type='text' placeholder='Your Email Id Here'></input>
                        <button type='Submit'>Subscribe</button>
                    </div>  
                </div>


            </div>
        </footer>

      
    

    )
  }
}

export default Child