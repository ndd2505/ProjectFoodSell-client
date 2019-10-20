import React from 'react';
import './Adding.css';
import {Link} from 'react-router-dom';

class Adding extends React.Component{
    
    render(){
        return(
            <form action='/add-user' method='Post'>
                <h1>Adding Page</h1>
                <div className='form-group'>
                    <label>Username</label>
                    <input name='username' type='text' placeholder='Your Login Username...'></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input name='password' className="form-control" type='text' placeholder='Your Password...'></input>
                </div>
                <div className='form-group'>
                    <label>Hoten</label>
                    <input name='hoten' className="form-control" type='text' placeholder='Your Name...'></input>
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input name='email' className="form-control" type='email' aria-describedby="emailHelp" placeholder='Your Email...'></input>
                </div>
                <div className='form-group'>
                    <Link to="/admin"><button className='btn btn-danger' >Cancel</button></Link>
                    <button className='btn btn-primary' type='submit'>Add</button>
                </div>
            </form>
        )
    }
}

export default Adding