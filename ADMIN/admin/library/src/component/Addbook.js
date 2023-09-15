import React, { Component } from 'react'
import axios from 'axios'
export class Addbook extends Component {
    constructor(props) {
      super(props)
      this.state = {
         bookName:"",
         author:"",
         link:"",
         dlink:"",
         description:"",
         file:null,
         imagesList:[] 
      }
    }
    addtodb=()=>{
        const {bookName,author,link,dlink,file,description}=this.state
        const formData= new FormData()
        formData.append('bookName',bookName)
        formData.append('author',author)
        formData.append('link',link)
        formData.append('dlink',dlink)
        formData.append('description',description)
        formData.append('file',file)
       axios.post('http://localhost:3000/upload',formData)
       .then(res=>{console.log(res)})
       .catch(err=>{console.log(err)})  
    }

  render() {
    const {bookName,author,link,dlink,description}=this.state
    return (
      <div>
        <form className='form-add'>
          <label>BookName</label>
          <input value={bookName} onChange={(e)=>this.setState({bookName:e.target.value})}></input><br/>
          <label>Author</label>
          <input value={author} onChange={(e)=>this.setState({author:e.target.value})}></input><br/>
          <label>Link</label>
          <input value={link} onChange={(e)=>this.setState({link:e.target.value})}></input><br/>
          <label>DownloadLink</label>
          <input value={dlink} onChange={(e)=>this.setState({dlink:e.target.value})}/><br></br>
          <label>Description</label>
          <textarea id="des" value={description} onChange={(e)=>this.setState({description:e.target.value})}/><br></br>
        <label>Images</label><br></br>
        <input type='file' onChange={(e)=>this.setState({file:e.target.files[0]})}/><br></br>
        <div>
        {this.state.imagesList.map(x=>(
          <img src={`http://localhost:3000/images/${x.image}`}/>
        ))}
        </div>
        <button onClick={this.addtodb}>Add</button>
          </form>
      </div>
    )
  }
}

export default Addbook