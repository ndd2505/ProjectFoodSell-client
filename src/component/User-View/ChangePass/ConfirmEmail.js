import React from "react";
import ErrorIcon from '@material-ui/icons/Error';

export default function ConfirmEmail(props) {
    const [email, setEmail] = React.useState("")
    const [error, setError] = React.useState("")
    
    const nextFunc = () =>{
        fetch("/confirmEmail/"+email)
        .then((res)=>{ if(res.status === 200){
            return props.next(email)
        }
        else{
            if(email === "")
            {
                setError("Vui lòng nhập Email")
            }
            else
            {
                setError("Email không tồn tại")
            }
        }
        })
    }

    return(
        <div className="form-group" style={{padding:"3vw", margin:"0px"}}>
            <label style={{fontSize:"1.1vw", color:"white"}}>Bạn hãy nhập Email của bạn </label>
            <input className="form-control" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <div style={{fontSize:"1vw", color:"red"}}>
                {(error === "") ? null : <ErrorIcon /> }
                {error}
            </div>
            <button style={{marginTop:"2vw"}} className="btn btn-primary" onClick={()=>nextFunc()}>Next</button>
        </div>
    )
}

