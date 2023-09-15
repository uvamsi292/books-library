import React,{Component} from "react";
import { Navigate } from "react-router-dom";


export class Loginsuccess extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        islogged:true
      }
    }
    componentDidMount(){
        setInterval(()=>{
        this.setState({islogged:false})},5000)
    }
  render() {
    if(this.state.islogged){
        return(
            <div className="container1"><div className="Loggedin">
                <h1>Logged in successfully</h1>
                Redirecting to homepage....
            </div></div>
        )
    }
    return <Navigate to='/'/>
  }
}

export default Loginsuccess