import React from 'react';
import './account.css';

class SignUp extends React.Component{

    render(){
        return(
            <div className='SignUp'>
                <h1 style={{color:'darkorange'}}>Sign Up Member</h1>
            <form action='/add-customer' method='post' style={{backgroundColor: 'black'}}>
                
                <div className="form-row">
                    <div className="form-group col-6">
                    <label style={{color: 'white'}}>First Name</label>
                    <input name='firstname' type="text" className="form-control" placeholder="First Name..."/>
                    </div>
                    <div className="form-group col-6">
                    <label style={{color: 'white'}}>Last Name</label>
                    <input name='lastname' type="text" className="form-control" placeholder="Last Name..."/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-3">
                        <label style={{color: 'white'}}>Gender</label>
                        <select name='gender' className="form-control">
                            <option value='Male' defaultValue>Male</option>
                            <option value='Female' >Female</option>
                        </select>
                    </div>
                    <div className='col-3'>

                    </div>
                    <div className='form-group col-6'>
                        <label style={{color: 'white'}}>Phone Number</label>
                        <input name='phone' type="text" className="form-control" placeholder="Phone Number..."></input>
                    </div>
                    
                </div>
                <div className='form-group'>
                    <label style={{color: 'white'}}>Address</label>
                    <input name='address' type="text" className="form-control" placeholder="Address..."></input>
                </div>
                <div className='form-group'>
                    <label style={{color: 'white'}}>Email</label>
                    <input name='email' type="text" className="form-control" placeholder="Email..."></input>
                </div>
                <div className='form-group'>
                    <label style={{color: 'white'}}>UserName</label>
                    <input name='username' type="text" className="form-control" placeholder="UserName..."></input>
                </div>
                <div className='form-group'>
                    <label style={{color: 'white'}}>Password</label>
                    <input name='password' type="password" className="form-control" placeholder="Password..."></input>
                    <small style={{color: 'white'}} className="form-text text-muted">
                    Your password must be 8-20 characters long and must not contain spaces, special characters, or emoji.
                    </small>
                </div>
                <div className='form-group'>
                    <label style={{color: 'white'}}>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password..."></input>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Sign Up</button>
            </form>
            </div>
        )
    }
}

export default SignUp