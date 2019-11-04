import React from "react";
import ErrorIcon from '@material-ui/icons/Error';

export default function ChangePass(props){
    const [newPass, setNewPass] = React.useState("")
    const [confNewPass, setConfNewPass] = React.useState("")
    const [error, setError] = React.useState("")
    const [confirmCode, setConfirmCode] = React.useState("")
    const [errorConfirmCode, setErrorConfirmCode] = React.useState("")
    const [errorConf, setErrorConf] = React.useState("")
    const [verified, setVerified] =React.useState(false)

    function verify(){
        fetch("/sendconfirmcode", {
            method:"post",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                "confirmcode": confirmCode
            })
        })
        .then((res) => {
            if(res.status === 200){
                setVerified(true)
            }else{
                setVerified(false)
                setErrorConfirmCode("Mã xác nhận không đúng")
            }
        })
    }
    const validConfirmCode = (func) =>{
        if(confirmCode === ""){
            setErrorConfirmCode("Xin hãy nhập mã xác nhận ")
        }else{
            return func()
        }
        
    }

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
        (verified === false) 
        ?   <div className="form-group" style={{padding:"3vw", margin:"0px"}}>
                <label style={{fontSize:"1.1vw", color:"white"}}>Bạn hãy nhập mã xác nhận đã được gửi qua email</label>
                <input type="text" className="form-control" value={confirmCode} onChange={(e)=>setConfirmCode(e.target.value)}></input>
                <div style={{fontSize:"1vw", color:"red"}}>
                    {(errorConfirmCode === "") ? null : <ErrorIcon /> }
                    {errorConfirmCode}
                </div>
                <button style={{marginTop:"2vw"}} className="btn btn-primary" onClick={()=>validConfirmCode(verify)}>Tiếp tục</button>
            </div>
        :   <div className="form-group" style={{padding:"3vw", margin:"0px"}}>
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
                <button style={{marginTop:"2vw"}} className="btn btn-success" onClick={()=>valid(submit)}>Hoàn Thành</button>
            </div>
    )
}
