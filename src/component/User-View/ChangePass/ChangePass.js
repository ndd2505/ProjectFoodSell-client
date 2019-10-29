import React from "react";
import ErrorIcon from '@material-ui/icons/Error';

export default function ChangePass(props){
    const [newPass, setNewPass] = React.useState("")
    const [confNewPass, setConfNewPass] = React.useState("")
    const [error, setError] = React.useState("")
    const [errorConf, setErrorConf] = React.useState("")

    function submit(){
        fetch("/changeforgot", {
            method:"post",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                "email": props.email,
                "username": props.username,
                "password": confNewPass
            })
        })
        .then(()=>props.next())
    }
    
    const valid = (func)=>{
        if(newPass === ""){
            setError("Password không được bỏ trống")
            return false
        }else{setError("")}
        if(confNewPass === ""){
            setErrorConf("Xác Nhận Password không được bỏ trống")
            return false
        }else{setErrorConf("")}
        if(newPass !== confNewPass){
            setErrorConf("Password và xác nhận Password không giống")
            return false
        }else{setErrorConf("")}
        return func()
    }

    return(
        <div className="form-group" style={{padding:"3vw", margin:"0px"}}>
            <label style={{fontSize:"1.1vw", color:"white"}}>Bạn hãy nhập mật khẩu mới</label>
            <input type="password" className="form-control" value={newPass} onChange={(e)=>setNewPass(e.target.value)}></input>
            <div style={{fontSize:"1vw", color:"red"}}>
                {(error === "") ? null : <ErrorIcon /> }
                {error}
            </div>
            <label style={{fontSize:"1.1vw", color:"white"}}>Xác nhận mật khẩu mới</label>
            <input type="password" className="form-control" value={confNewPass} onChange={(e)=>setConfNewPass(e.target.value)}></input>
            <div style={{fontSize:"1vw", color:"red"}}>
                {(errorConf === "") ? null : <ErrorIcon /> }
                {errorConf}
            </div>
            <button style={{marginTop:"2vw"}} className="btn btn-primary" onClick={()=>valid(submit)}>Finish</button>
        </div>
    )
}
