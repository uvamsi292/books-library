import React, { Component } from 'react'
import axios from 'axios'
export class Produt extends Component {
    constructor(props) {
      super(props)
      this.state = {
        file:null,
        imagesList:[] 
      }
    }
    upload=()=>{
      const formData=new FormData()
       formData.append('file',this.state.file)
       axios.post('http://localhost:3000/upload',formData)
       .then(res=>{console.log(res)})
       .catch(err=>{console.log(err)})  
    }
    getImage=()=>{
      axios.get('http://localhost:3000/getImg/')
      .then(res=>{
        this.setState({imagesList:res.data})}
        )
      .catch(err=>{console.log(err)})
    }
  render() {
    return (
      <div>
        <form className='form-img'>
        <label>Images</label><br></br>
        <input type='file' onChange={(e)=>this.setState({file:e.target.files[0]})}/><br></br>
        <button onClick={this.upload}>upload</button><br></br>
        <button onClick={this.getImage}>Get uploaded Images</button>
        </form>
        <div className='images'>
        {this.state.imagesList.map(x=>(
          <img src={`http://localhost:3000/images/${x.image}`}/>
        ))}
        </div>
      </div>
    )
  }
}

export default Produt