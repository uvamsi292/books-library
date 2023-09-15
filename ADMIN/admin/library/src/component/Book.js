import React, { Component } from 'react'
import Addbook from './Addbook'
import axios from 'axios'
export class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
       list:[],
       poupbool:false,
       bookName:"",
       author:"",
       link:"",
       dlink:"",
       description:"",
       file:[],          
       id:""
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3000/book-api')
    .then(res=>{
      this.setState({list:res.data})
    })
    .catch()
  }
  deleteBook=(id)=>{
    axios.delete(`http://localhost:3000/book-api/${id}`)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
    alert("Deleted")
    window.location.reload()
  }
  cancel=(e)=>{
      this.setState({poupbool:false})
      e.preventDefault()
  }
  showPopup=(id,bookName,author,link,dlink,file,description)=>{
    this.setState({
      poupbool:true,
      bookName:bookName,
      author:author,
      link:link,
      dlink:dlink,
      description:description,
      file:file,
      id:id
    })
  }
  updateBook=()=>{
    const {bookName,author,link,dlink,id,file,description}=this.state
    axios.put(`http://localhost:3000/book-api/${id}`,
    {
        bookName:bookName,
        author:author,
        link:link,
        dlink:dlink,
        description:description,
        file:file,
        id:id 
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })

  }
  render() {
    const {bookName,author,link,id,file,description,dlink}=this.state
    return (
      <div>
        <Addbook/> <br></br>
        <table className='book-table'>
          <thead>
            <tr>
              <th>BookName</th>
              <th>Author</th>
              <th>Link</th>
              <th>DownloadLink</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(x=>(<>
            <tr>
               <td>{x.bookName}</td>
               <td>{x.author}</td>
               <td>{x.link}</td>
               <td>{x.dlink}</td>
               <td>{x.description}</td>
               <td><img className='imageList' src={`http://localhost:3000/images/${x.image}`} alt=''/></td>
               <td><button onClick={()=>this.showPopup(x._id,x.bookName,x.author,x.link,x.dlink,x.description,x._file)}>Update</button>
               <button onClick={()=>this.deleteBook(x._id)}>Delete</button>
               </td>
              </tr>
              </>))}
          </tbody>
        </table>
        {this.state.poupbool?<>
        <div className='popup'>
          <form className='form-update'>
             <button className='popup-cancel' onClick={this.cancel}>X</button>
             <label>BookName</label>
             <input value={bookName} onChange={(e)=>this.setState({bookName:e.target.value})}/><br></br>
             <label>Author</label>
             <input value={author} onChange={(e)=>this.setState({author:e.target.value})}/><br></br>
             <label>Link</label>
             <input value={link} onChange={(e)=>this.setState({link:e.target.value})}/><br></br>
             <label>DownloadLink</label>
             <input value={dlink} onChange={(e)=>this.setState({dlink:e.target.value})}/><br></br>
             <label>Description</label>
             <textarea  id="desc" value={description} onChange={(e)=>this.setState({description:e.target.value})}/><br></br>
             <label>Images</label><br></br>
             <input type='file' onChange={(e)=>this.setState({file:e.target.files[0]})}/><br></br>
             <button onClick={this.updateBook}>Update</button>
          </form>
        </div>
        </>:""}
           <br></br>

      </div>
    )
  }
}

export default Book