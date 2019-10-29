import React from "react";
import jwt_decode from "jwt-decode"
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function LoginChangePass(props){

    const [oldPass, setOldPass] = React.useState("")
    const [newPass, setNewPass] = React.useState("")
    const [confNewPass, setConfNewPass] = React.useState("")
    const [oldPassError, setOldPassError] = React.useState("")
    const [newPassError, setNewPassError] = React.useState("")
    const [confNewPassError, setConfNewPassError] = React.useState("")
    const [status, setStatus] = React.useState(false)

    const id = jwt_decode(localStorage.getItem("keytoken")).id

    function Submit(){
            fetch('/confirmpassword', {
                method:"post",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    "id": id,
                    "password": oldPass
                })
            })
            .then((res)=>{if(res.status === 200){
                fetch('/passwordchangelogin', {
                    method:"post",
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        "id": id,
                        "newpass": confNewPass
                    })
                })
                .then(()=>{if(res.status === 200){setStatus(true)}})
            }else{
                setOldPassError("Mật khẩu không chính xác")
                setConfNewPass("")
                setNewPass("")
            }
        })
    }
    
    function valid(func){
        if(newPass !== confNewPass){
            setNewPassError("Mật khẩu xác nhận không giống ")
            return false
        }else{
            setNewPassError("")
        }
        if(confNewPass === ""){
            setConfNewPassError("Vui lòng nhập mật khẩu xác nhận")
            return false
        }else{
            setConfNewPassError("")
        }
        if(newPass === ""){
            setNewPassError("Vui lòng nhập mật khẩu mới")
            return false
        }else{
            setNewPassError("")
        }
        if(oldPass === ""){
            setOldPassError("Vui lòng nhập mật khẩu cũ")
            return false
        }else{
            setOldPassError("")
        }
        return func()
    }

    return(
        (status === false)
        ? <div className="form-group" style={{padding:"3vw", margin:"0px"}}>
            <label style={{fontSize:"1.1vw", color:"white"}}>Bạn hãy nhập mật khẩu cũ</label>
            <input type="text" className="form-control" value={oldPass} onChange={(e)=>setOldPass(e.target.value)}></input>
            <div style={{fontSize:"1vw", color:"red"}}>
                {(oldPassError === "") ? null : <ErrorIcon /> }
                {oldPassError}
            </div>
            <label style={{fontSize:"1.1vw", color:"white"}}>Bạn hãy nhập mật khẩu mới</label>
            <input type="text" className="form-control" value={newPass} onChange={(e)=>setNewPass(e.target.value)}></input>
            <div style={{fontSize:"1vw", color:"red"}}>
                {(newPassError === "") ? null : <ErrorIcon /> }
                {newPassError}
            </div>
            <label style={{fontSize:"1.1vw", color:"white"}}>Xác nhận mật khẩu mới</label>
            <input type="text" className="form-control" value={confNewPass} onChange={(e)=>setConfNewPass(e.target.value)}></input>
            <div style={{fontSize:"1vw", color:"red"}}>
                {(confNewPassError === "") ? null : <ErrorIcon /> }
                {confNewPassError}
            </div>
            <button style={{marginTop:"2vw"}} className="btn btn-primary" onClick={()=>valid(Submit)}>Finish</button>
          </div>
        : <div style={{textAlign:"center", padding:"3vw", margin:"0px"}}>
        <h1 style={{color:"green", fontSize:"2vw"}}>Đổi Mật khẩu thành công <CheckCircleOutlineIcon /></h1>
        <br/>
        <button className="btn btn-outline-danger" onClick={()=>window.location.replace("http://localhost:3000/home")}>Quay Trở lại trang đăng nhập</button>
          </div>
    )
}