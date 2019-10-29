import React from 'react';
import {Link} from 'react-router-dom';
import './account.css';

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state={
      username: "",
      password: "",
      errorLogin: ""
    }
  }
  
  handleLogin = ()=>{
    if(this.state.username.split("")[0] === "@"){
      fetch('/loginadmin',{
        method:"post",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          "username": this.state.username,
          "password": this.state.password
        })
      })
      .then((res)=>res.json())
      .then((row)=> localStorage.setItem("keytoken", row))
      .then(()=> window.location.replace("http://localhost:3000/admin"))
    }else{
      fetch('/logincus', {
        method:"post",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          "username": this.state.username,
          "password": this.state.password
        })
      })
      .then((res)=>res.json())
      .then((row)=> localStorage.setItem("keytoken", row))
      .then(()=> window.location.replace("http://localhost:3000/home"))
    }
  }
  hanldeInput = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return(
      <div className='container'>
		      <div className="card"></div>
            <div className='card-header'>
              <h1>Sign In</h1>
            </div>
            <div className='card-body' >
              <div style={{backgroundColor: 'black'}}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">UserName</span>
                  </div>
                  <input name='username' type="text" className="form-control" placeholder="username" value={this.state.username} onChange={(e)=>{this.hanldeInput(e)}}></input>	
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Password</span>
                  </div>
                  <input name='password' type="password" className="form-control" placeholder="password" value={this.state.password} onChange={(e)=>{this.hanldeInput(e)}}></input>               
              </div>
              {(this.state.errorLogin === "") ? null : <div style={{color:"red", textAlign:"center"}}>{this.state.errorLogin}</div>}
              <div className="form-group" style={{height:"2.5vw", margin:"0px"}}>
                <button value="Login" onClick={this.handleLogin} className="btn float-right login_btn">Sign In</button>
              </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account ?
                <Link to='/home/signup'>Sign Up</Link>
              </div>
              <div className="d-flex justify-content-center">
                <Link to='/home/forgot'>Forgot your password ?</Link>
              </div>
          </div>
        </div>
    )
  }
}
export default Login