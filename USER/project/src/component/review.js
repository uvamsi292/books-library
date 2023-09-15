import React, { Component } from 'react'
import './review.css'
export class B extends Component {
  render() {
    return (
      <div>
        <div className='Re'>
      <h1>Reviews</h1>
       </div>
  <div className="flexbox3">
    <div className="item11">
      <div className="ball" />
      <h1>MEGHAN</h1>
      <p>Anyone who loves books just can you buy a book in this book store </p>
    </div>
    <div className="item12">
      <div className="ball1" />
      <h1>ERNEST</h1>
      <p>
        This online store is heaven for book lovers.You can get almost all the
        books you are looking for.
      </p>
    </div>
    <div className="item13">
      <div className="ball2" />
      <h1>JESS KIDD</h1>
      <p>
        Treasure trove of books!The staff are really helpful in checking for
        specific books 
      </p>
    </div>
    <div className="item14">
      <div className="ball3" />
      <h1>TAGORE</h1>
      <p>
        There are a ton of titles and genres to go through and read till you
        finalise what to buy.
      </p>
    </div>
  </div>
      </div>
    )
  }
}

export default B