import React from 'react';
import {Link} from 'react-router-dom';
import './account.css';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
  
  handlesubmit = ()=>{
    return(
      <Redirect to='/home' />
    )
  }

  render(){
    return(
      <div className='container'>
		      <div className="card"></div>
            <div className='card-header'>
              <h1>Sign In</h1>
            </div>
            <div className='card-body' >
              <form action='/login' method='post' style={{backgroundColor: 'black'}}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">UserName</span>
                  </div>
                  <input name='username' type="text" className="form-control" placeholder="username"></input>	
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Password</span>
                  </div>
                  <input name='password' type="password" className="form-control" placeholder="password"></input>
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox"></input>Remember Me
              </div>
              <div className="form-group">
                <button type="submit" value="Login" className="btn float-right login_btn">Sign In</button>
              </div>
              </form>
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