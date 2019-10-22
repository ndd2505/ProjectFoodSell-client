import React from 'react';
import {Link} from 'react-router-dom';
import './account.css';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state={
      username: "",
      password: "",
    }
  }
  
  handlesubmit = ()=>{
    return(
      <Redirect to='/home' />
    )
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
              <div className="form-group">
                <button value="Login" className="btn float-right login_btn">Sign In</button>
              </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account ?
                <Link to='/home/signup'>Sign Up</Link>
              </div>
              <div className="d-flex justify-content-center">
                <Link to='/home/forgot'>Forgot your password?</Link>
              </div>
          </div>
        </div>
    )
  }
}
export default Login