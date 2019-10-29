import React from "react";
import jwt_decode from "jwt-decode"
import ErrorIcon from '@material-ui/icons/Error';

const token = localStorage.getItem("keytoken")
export default class CusInfo extends React.Component {

    constructor(props){
        super(props);
        this.state={
            name: "",
            gender: "",
            phone: "",
            address: "",
            email: "",
            username: "",
            errorname: "",
            errorlastname: "",
            errorgender: "",
            errorphone: "",
            erroraddress: "",
            erroremail: "",
            errorusername: "",
        }
    }

    handleOnChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }
    validate = () =>{

        let errorname= ""
        let errorgender= ""
        let errorphone= ""
        let erroraddress= ""
        let erroremail= ""
        let errorusername= ""

        if(this.state.name === ""){
            errorname= "Vui lòng không bỏ trống !"
        }
        if(this.state.gender === ""){
            errorgender= "Vui lòng chọn giới tính !"
        }
        if(this.state.phone === ""){
            errorphone= "Vui lòng không bỏ trống !"
        }else{
            if(isNaN(this.state.phone) ||  this.state.phone.split("")[0] !== "0" || this.state.phone.length !== 10){
                errorphone= "Số điện thoại không hợp lệ !"
            }
          }
        if(this.state.address === ""){
            erroraddress= "Vui lòng không bỏ trống !"
        }
        if(this.state.email === ""){
            erroremail= "Vui lòng không bỏ trống !"
        }else{
            if(!this.state.email.includes("@gmail.com")){
                erroremail= "Email không hợp lệ ! Vui lòng sử dụng địa chỉ gmail"
            }
          }
        if(this.state.username === ""){
            errorusername= "Vui lòng không bỏ trống !"
        }if(this.state.username.split("")[0] === "@"){
            errorname= "Vui lòng chọn tên đăng nhập khác"
        }
        if(errorname || errorphone || errorusername || erroraddress || erroremail ||errorgender){
            this.setState({errorname ,errorphone , errorusername , erroraddress , erroremail ,errorgender})
            return false
        }else{
            return true
        }
    }

    handleSubmit = () =>{
        if(this.validate()){
        if(window.confirm("Bạn có muốn cập nhật thông tin không ?")){
            fetch('/updated/'+jwt_decode(token).id, {
            method:"post",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                "name": this.state.name,
                "gender": this.state.gender,
                "phone": this.state.phone,
                "address": this.state.address,
                "email": this.state.email,
                "username": this.state.username
            })
        })
        .then((res)=> {if(res.status === 200){window.location.replace("http://localhost:3000/home")}})
        }
        }
    }

    updatefill(some){
        this.setState({name: some.name})
        this.setState({gender: some.gender})
        this.setState({email: some.email})
        this.setState({phone: some.phone})
        this.setState({address: some.address})
        this.setState({username: some.username})
    }

    componentDidMount(){
        fetch("/updatecus/"+jwt_decode(token).id)
        .then((res)=> res.json())
        .then((row)=> this.updatefill(row[0]))
    }
    render(){
        return(
            <div style={{backgroundColor: 'black', textAlign:"center"}}>
                <div className="form-row">
                    <div className="form-group col-12">
                    <label style={{color: 'white'}}>Họ và Tên đệm</label>
                    <input name='name' type="text" className="form-control" value={this.state.name} onChange={(e)=>this.handleOnChange(e)} placeholder="First Name..."/>
                    <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.errorname) ? <ErrorIcon /> : null}
                          {this.state.errorname}
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
                <button className="btn btn-outline-danger" onClick={()=>window.location.replace("http://localhost:3000/home/")}>Cancel</button>
                <button className='btn btn-outline-primary' onClick={this.handleSubmit}>Update Info</button>
            </div>
        )
    }
}