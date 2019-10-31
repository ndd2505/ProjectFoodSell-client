import React from 'react';
import './Adding.css';
import {Link} from 'react-router-dom';
import ErrorIcon from '@material-ui/icons/Error';

class Adding extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username: "",
            password:"",
            hoten: "",
            email: "",
            role: "",
            usernameError: "",
            passwordError:"",
            hotenError: "",
            emailError: "",
            roleError: ""
        }
    }

    handleInput = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    validClient= (func) =>{

        let usernameError= "";
        let passwordError= "";
        let hotenError= "";
        let emailError= "";
        let roleError="";

        if(this.state.username === ""){
            usernameError = "Vui lòng cung cấp username"
        }else{
            if(this.state.username.split("")[0] !== "@"){
                usernameError = "username không đúng định dạng. Kí tự đầu tiên phải là @"
            }
        }
        
        if(this.state.password === ""){
            passwordError = "password không được bỏ trống "
        }
        if(this.state.hoten === ""){
            hotenError = "Vui lòng cung cấp họ tên "
        }if(this.state.email === ""){
            emailError = "Vui lòng cung cấp Email"
        }else{
            if(!this.state.email.includes("@gmail.com")){
                emailError = "email không hợp lệ. Vui lòng sử dụng địa chỉ gmail"
            }
        }
        if(this.state.role === ""){
            roleError = "Vui lòng chọn quyền truy cập"
        }

        if( usernameError || passwordError || hotenError || emailError || roleError){
            this.setState({usernameError , passwordError , hotenError , emailError, roleError})
            return false
        }else{
            return func()
        }
    }

    validServer = () =>{
        fetch("/valid-adduser", {
            method:"post",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                "username": this.state.username,
                "email": this.state.email
            })
        })
        .then((res)=> res.json())
        .then((row)=> this.setState({emailError: row.email, usernameError: row.username}))
        .then(()=>{if(this.state.emailError || this.state.usernameError){console.log("failed")}else{ return this.handleSubmit()}})
    }

    handleSubmit = () =>{
        fetch("/add-user", {
            method:"post",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password,
                "hoten": this.state.hoten,
                "email": this.state.email,
                "role": this.state.role
            })
        })
        .then(()=>window.location.replace("http://localhost:3000/admin/user"))
    }
    
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h1>Adding User</h1>
                <div className='form-group'>
                    <label style={{fontSize:"1.3vw", color:"white"}}>Username</label>
                    <input className="form-control" name='username' type='text' placeholder='Your Login Username...' value={this.state.username} onChange={(e)=>this.handleInput(e)}></input>
                    <div style={{textAlign:"left", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.usernameError) ? <ErrorIcon /> : null}
                          {this.state.usernameError}
                    </div>
                </div>
                <div className='form-group'>
                    <label style={{fontSize:"1.3vw", color:"white"}}>Password</label>
                    <input name='password' className="form-control" type='text' placeholder='Your Password...' value={this.state.password} onChange={(e)=>this.handleInput(e)}></input>
                    <div style={{textAlign:"left", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.passwordError) ? <ErrorIcon /> : null}
                          {this.state.passwordError}
                    </div>
                </div>
                <div className="form-group">
                    <label style={{fontSize:"1.3vw", color:"white"}}>Vai trò</label>
                    <select name="role" className="form-control" value={this.state.role} onChange={(e)=>this.handleInput(e)}>
                        <option></option>
                        <option>superadmin</option>
                        <option>admin</option>
                    </select>
                    <div style={{textAlign:"left", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.roleError) ? <ErrorIcon /> : null}
                          {this.state.roleError}
                    </div>
                </div>
                <div className='form-group'>
                    <label style={{fontSize:"1.3vw", color:"white"}}>Họ Tên</label>
                    <input  name='hoten' className="form-control" type='text' placeholder='Your Name...' value={this.state.hoten} onChange={(e)=>this.handleInput(e)}></input>
                    <div style={{textAlign:"left", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.hotenError) ? <ErrorIcon /> : null}
                          {this.state.hotenError}
                    </div>
                </div>
                <div className='form-group'>
                    <label style={{fontSize:"1.3vw", color:"white"}}>Email</label>
                    <input name='email' className="form-control" type='text' placeholder='Your Email...' value={this.state.email} onChange={(e)=>this.handleInput(e)}></input>
                    <div style={{textAlign:"left", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.emailError) ? <ErrorIcon /> : null}
                          {this.state.emailError}
                    </div>
                </div>
                
                <div className='form-group'>
                    <Link to="/admin"><button className='btn btn-danger' >Cancel</button></Link>
                    <button className='btn btn-primary' onClick={()=>this.validClient(this.validServer)}>Add</button>
                </div>
            </div>
        )
    }
}

export default Adding