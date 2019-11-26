import React from "react";
import { connect } from "react-redux"
import ErrorIcon from '@material-ui/icons/Error';
import tphcm from "../../../tphcm";
import jwt_decode from 'jwt-decode';

const mapStateToProps = (state) =>{
  return { productincart : state}
}

class UserOrderInfo extends React.Component{
  
    constructor(props){
        super(props)

        this.state={
          orderName:"",
          orderPhone:"",
          orderEmail:"",
          orderAddress:"",
          orderAddressWard:"",
          orderAddressDistrict:"",
          orderNameError:"",
          orderPhoneError:"",
          orderEmailError:"",
          orderAddressError:"",
          orderAddressWardError:"",
          orderAddressDistrictError:"",
        }
    }

    hanldeInput =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    
    validation=()=>{
      let orderNameError="";
      let orderPhoneError="";
      let orderEmailError="";
      let orderAddressError="";
      let orderAddressWardError="";
      let  orderAddressDistrictError="";
      if(this.state.orderName === ""){
        orderNameError = "Vui lòng nhập tên đầy đủ !"
      }
      if(this.state.orderPhone === ""){
        orderPhoneError = "Vui lòng nhập số điẹn thoại !"
      }else{
        if(isNaN(this.state.orderPhone) ||  this.state.orderPhone.split("")[0] !== "0" || this.state.orderPhone.length !== 10){
          orderPhoneError = "Số điện thoại không hợp lệ !"
        }
      }
      if(this.state.orderEmail === ""){
        orderEmailError = "Vui lòng nhập email !"
      }else{
        if(!this.state.orderEmail.includes("@gmail.com")){
          orderEmailError = "Email không hợp lệ !"
        }
      }
      if(this.state.orderAddress === ""){
        orderAddressError = "Vui lòng nhập địa chỉ !"
      }
      if(this.state.orderAddressWard === ""){
        orderAddressWardError = "Vui lòng chọn khu vực !"
      }
      if(this.state.orderAddressDistrict === ""){
        orderAddressDistrictError = "Vui lòng chọn khu vực !"
      }
      if(orderNameError || orderPhoneError || orderEmailError || orderAddressError || orderAddressDistrictError || orderAddressWardError){
        this.setState({orderNameError, orderPhoneError, orderEmailError, orderAddressError, orderAddressDistrictError, orderAddressWardError})
        return false
      }else{
        return true
      }
    }

    handleSubmit =(func)=>{
      var date = new Date()
      const valid = this.validation()
      if(valid){
        fetch("/addorderplacer", {
          method:"post",
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify({
            "userid":(sessionStorage.getItem("keytoken") === null ? "null" : jwt_decode(sessionStorage.getItem("keytoken")).id ),
            "name":this.state.orderName,
            "total":this.props.total,
            "promotion":0,
            "address":this.state.orderAddress+" "+this.state.orderAddressWard+" "+this.state.orderAddressDistrict,
            "phone":this.state.orderPhone,
            "email":this.state.orderEmail,
            "timeorder":date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),
            "status":"Undone",
            "product": this.props.productincart
          })
          
        })
        .then(()=>this.props.dispatch({type:"clear"}))

        return func()
      }
    }
    render(){
    return(
        <div className="userorderinfo needs-validation" noValidate style={{position:"relative", textAlign:"center" }}>
            <div className="form-group">
                <label style={{color:"darkorange"}}>Họ Và Tên</label>
                <input name="orderName" className="form-control" type="text" value={this.state.orderName} onChange={(e)=>this.hanldeInput(e)}></input>
                <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                  {(this.state.orderNameError) ? <ErrorIcon/> : null}
                  {this.state.orderNameError}
                </div>
            </div>
            <div className="form-group">
                <label style={{color:"darkorange"}}>Số Điện Thoại</label>
                <input name="orderPhone" className="form-control" type="text" value={this.state.orderPhone} onChange={(e)=>this.hanldeInput(e)}></input>
                <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                  {(this.state.orderPhoneError) ? <ErrorIcon /> : null}
                  {this.state.orderPhoneError}
                </div>
            </div>
            <div className="form-group">
                <label style={{color:"darkorange"}}>Email</label>
                <input name="orderEmail" className="form-control" type="text" value={this.state.orderEmail} onChange={(e)=>this.hanldeInput(e)}></input>
                <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                  {(this.state.orderEmailError) ? <ErrorIcon /> : null}
                  {this.state.orderEmailError}
                </div>
            </div>
            <div className="form-group">
                <label style={{color:"darkorange"}}>Địa Chỉ</label>
                <input name="orderAddress" className="form-control" type="text" value={this.state.orderAddress} onChange={(e)=>this.hanldeInput(e)}></input>
                <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                  {(this.state.orderAddressError) ? <ErrorIcon /> : null}
                  {this.state.orderAddressError}
                </div>
                <br/>
                <div className="row">
                    <div className="col-6">
                        <select name="orderAddressDistrict" className="form-control" style={{padding:"0px"}} value={this.state.orderAddressDistrict} onChange={(e)=>this.hanldeInput(e)}>
                            <option></option>
                            {tphcm.map((district, index) => 
                                <option key={index}>{district.name}</option>
                                )}
                        </select>
                        <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.orderAddressDistrictError) ? <ErrorIcon /> : null}
                          {this.state.orderAddressDistrictError}
                        </div>
                    </div>
                    <div className="col-6">
                        <select name="orderAddressWard" className="form-control" style={{padding:"0px"}} value={this.state.orderAddressWard} onChange={(e)=>this.hanldeInput(e)}>
                            <option></option>
                            {
                            (this.state.orderAddressDistrict === "") ? null 
                            : tphcm.find((district)=>{return district.name === this.state.orderAddressDistrict}).district.map((ward, index)=><option key={index}>{ward}</option>)
                            }
                        </select>
                        <div style={{textAlign:"right", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.orderAddressWardError) ? <ErrorIcon /> : null}
                          {this.state.orderAddressWardError}
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" style={{width:"7vw"}} onClick={()=>{this.handleSubmit(this.props.next)}}>Xác Nhận</button>
        </div>
    )
    }
}
export default connect(mapStateToProps)(UserOrderInfo)