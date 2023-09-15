import React, { Component } from 'react'
import axios from 'axios'
import './book.css'
export class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
       list:[],
       bookName:"",
       author:"",
       link:"",
       id:"",
      imagesList:[] 
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3000/book-api')
    .then(res=>{
      this.setState({list:res.data})
    })
    .catch(err=>{
      this.setState({err})
    })

  }
  render() {
    const {bookName,author,link,id,imagesList}=this.state
    return (
<div>
      <h1 className='book'>BOOKS</h1>
    <div className=''>
          {this.state.list.map(x=>
         <div className='dbody'>
            <div className='dflex'>
               <div className='dimg1'>
                  <img src={`http://localhost:3000/images/${x.image}`} alt=''/></div>
                <div className='dnflex'>
                    <h1>{x.bookName}</h1>
                    <h4>Author:{x.author}</h4><div className='dflex1'>
                    <a href={x.link}>READ</a> <a href={x.dlink}>DOWNLOAD</a></div>
                </div>
             </div>
            <em><div> <p>{x.description}</p> </div></em>
         </div>
            
          )}
        
    </div>
</div>
    )
  }
}

export default Books





