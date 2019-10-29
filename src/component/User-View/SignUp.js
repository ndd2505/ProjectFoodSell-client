import React from 'react';
import './account.css';
import tphcm from '../../tphcm';
import ErrorIcon from '@material-ui/icons/Error';

class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            firstname: "",
            lastname: "",
            gender: "",
            phone: "",
            address: "",
            addressDistrict:"",
            addressWard: "",
            email: "",
            username: "",
            password: "",
            passwordconf: "",
            errorfirstname: "",
            errorlastname: "",
            errorgender: "",
            errorphone: "",
            erroraddress: "",
            erroraddressDistrict: "",
            erroraddressWard: "",
            erroremail: "",
            errorusername: "",
            errorpassword: "",
            errorpasswordconf: "",
        }
    }
    
    handleOnChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }
    validate = () =>{

        let errorfirstname= ""
        let errorlastname= ""
        let errorgender= ""
        let errorphone= ""
        let erroraddress= ""
        let erroraddressDistrict= ""
        let erroraddressWard= ""
        let erroremail= ""
        let errorusername= ""
        let errorpassword= ""
        let errorpasswordconf= ""

        if(this.state.firstname === ""){
            errorfirstname= "Vui lòng không bỏ trống !"
        }
        if(this.state.lastname === ""){
            errorlastname="Vui lòng không bỏ trống !"
        }
        if(this.state.gender === ""){
            errorgender= "Vui lòng chọn giới tính !"
        }
        if(this.state.phone === ""){
            errorphone= "Vui lòng không bỏ trống !"
        }else{
            if(isNaN(this.state.orderPhone) ||  this.state.orderPhone.split("")[0] !== "0" || this.state.orderPhone.length !== 10){
                errorphone= "Số điện thoại không hợp lệ !"
            }
          }
        if(this.state.address === ""){
            erroraddress= "Vui lòng không bỏ trống !"
        }
        if(this.state.addressWard === ""){
            erroraddressWard= "Vui lòng chọn phường/xã !"
        }
        if(this.state.addressDistrict === ""){
            erroraddressDistrict= "Vui lòng chọn quận/huyện !"
        }
        if(this.state.email === ""){
            erroremail= "Vui lòng không bỏ trống !"
        }else{
            if(!this.state.orderEmail.includes("@gmail.com")){
                erroremail= "Email không hợp lệ ! Vui lòng sử dụng địa chỉ gmail"
            }
          }
        if(this.state.username === ""){
            errorusername= "Vui lòng không bỏ trống !"
        }if(this.state.username.split("")[0] === "@"){
            errorfirstname= "Vui lòng chọn tên đăng nhập khác"
        }
        if(this.state.password === ""){
            errorpassword= "Vui lòng không bỏ trống !"
        }else{
            if(this.state.password.length < 6){
                errorpassword= "Mật khẩu phải ít nhất 6 kí tự !"
            }
        }
        if(this.state.passwordconf === ""){
            errorpasswordconf= "Vui lòng không bỏ trống !"
        }else{
            if(this.state.passwordconf !== this.state.password){
                errorpasswordconf= "Mật khẩu xác nhận không giống !"
            }
        }
        if(errorfirstname || errorlastname || errorpassword || errorpasswordconf || errorphone || errorusername || erroraddress || erroraddressDistrict || erroraddressWard || erroremail ||errorgender){
            this.setState({errorfirstname , errorlastname , errorpassword, errorpasswordconf ,errorphone , errorusername , erroraddress , erroraddressDistrict , erroraddressWard , erroremail ,errorgender})
            return false
        }else{
            return true
        }
    }
    handleSubmit = () =>{
        if(this.validate()){
        fetch('/add-customer', {
            method:"post",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                "firstname": this.state.firstname,
                "lastname": this.state.lastname,
                "gender": this.state.gender,
                "phone": this.state.phone,
                "address": this.state.address+" "+this.state.addressWard+" "+this.state.addressDistrict,
                "email": this.state.email,
                "username": this.state.username,
                "password": this.state.password
            })
        })
        }
    }

    render(){
        return(
            <div className='SignUp'>
                <h1 style={{color:'darkorange'}}>Sign Up Member</h1>
            <div action='/add-customer' method='post' style={{backgroundColor: 'black'}}>
                
                <div className="form-row">
                    <div className="form-group col-6">
                    <label style={{color: 'white'}}>Họ và Tên đệm</label>
                    <input name='firstname' type="text" className="form-control" value={this.state.firstname} onChange={(e)=>this.handleOnChange(e)} placeholder="First Name..."/>
                    <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.errorfirstname) ? <ErrorIcon /> : null}
                          {this.state.errorfirstname}
                    </div>
                    </div>
                    <div className="form-group col-6">
                    <label style={{color: 'white'}}>Tên </label>
                    <input name='lastname' type="text" className="form-control" value={this.state.lastname} onChange={(e)=>this.handleOnChange(e)} placeholder="Last Name..."/>
                    <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.errorlastname) ? <ErrorIcon /> : null}
                          {this.state.errorlastname}
                    </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-3">
                        <label style={{color: 'white'}}>Giới Tính</label>
                        <select name='gender' value={this.state.gender} onChange={(e)=>this.handleOnChange(e)} className="form-control">
                            <option></option>
                            <option value='Male' defaultValue>Nam</option>
                            <option value='Female' >Nữ</option>
                        </select>
                        <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.errorgender) ? <ErrorIcon /> : null}
                          {this.state.errorgender}
                        </div>
                    </div>
                    <div className='col-3'>

                    </div>
                    <div className='form-group col-6'>
                        <label style={{color: 'white'}}>Số Điện Thoại</label>
                        <input name='phone' type="text" className="form-control" value={this.state.phone} onChange={(e)=>this.handleOnChange(e)} placeholder="Phone Number..."></input>
                        <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.errorphone) ? <ErrorIcon /> : null}
                          {this.state.errorphone}
                        </div>
                    </div>
                    
                </div>
                <div className='form-group'>
                    <label style={{color: 'white'}}>Địa Chỉ</label>
                    <input name='address' type="text" className="form-control" value={this.state.address} onChange={(e)=>this.handleOnChange(e)} placeholder="Address..."></input>
                    <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.erroraddress) ? <ErrorIcon /> : null}
                          {this.state.erroraddress}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p style={{textAlign:"left", color:"white"}}>Quận</p>
                        <select name="addressDistrict" className="form-control" style={{padding:"0px"}} value={this.state.addressDistrict} onChange={(e)=>this.handleOnChange(e)}>
                            <option></option>
                            {tphcm.map((district, index) => 
                                <option key={index}>{district.name}</option>
                                )}
                        </select>
                        <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.erroraddressDistrict) ? <ErrorIcon /> : null}
                          {this.state.erroraddressDistrict}
                        </div>
                    </div>
                    <div className="col">
                        <p style={{textAlign:"left", color:"white"}}>Phường</p>
                        <select name="addressWard" className="form-control" style={{padding:"0px"}} value={this.state.addressWard} onChange={(e)=>this.handleOnChange(e)}>
                            <option></option>
                            {
                            (this.state.addressDistrict === "") ? null 
                            : tphcm.find((district)=>{return district.name === this.state.addressDistrict}).district.map((ward, index)=><option key={index}>{ward}</option>)
                            }
                        </select>
                        <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.erroraddressWard) ? <ErrorIcon /> : null}
                          {this.state.erroraddressWard}
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label style={{color: 'white'}}>Email</label>
                    <input name='email' type="text" className="form-control" value={this.state.email} onChange={(e)=>this.handleOnChange(e)} placeholder="Email..."></input>
                    <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.erroremail) ? <ErrorIcon /> : null}
                          {this.state.erroremail}
                    </div>
                </div>
                <div className='form-group'>
                    <label style={{color: 'white'}}>UserName</label>
                    <input name='username' type="text" className="form-control" value={this.state.username} onChange={(e)=>this.handleOnChange(e)} placeholder="UserName..."></input>
                    <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.errorusername) ? <ErrorIcon /> : null}
                          {this.state.errorusername}
                    </div>
                </div>
                <div className='form-group'>
                    <label style={{color: 'white'}}>Password</label>
                    <input name='password' type="password" className="form-control" value={this.state.password} onChange={(e)=>this.handleOnChange(e)} placeholder="Password..."></input>
                    <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.errorpassword) ? <ErrorIcon /> : null}
                          {this.state.errorpassword}
                    </div>
                </div>
                <div className='form-group'>
                    <label style={{color: 'white'}}>Confirm Password</label>
                    <input type="confpassword" className="form-control" value={this.state.passwordconf} onChange={(e)=>this.handleOnChange(e)} placeholder="Confirm Password..."></input>
                    <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.errorpasswordconf) ? <ErrorIcon /> : null}
                          {this.state.errorpasswordconf}
                    </div>
                </div>
                <button className='btn btn-outline-primary' onClick={this.handleSubmit}>Sign Up</button>
            </div>
            </div>
        )
    }
}

export default SignUp