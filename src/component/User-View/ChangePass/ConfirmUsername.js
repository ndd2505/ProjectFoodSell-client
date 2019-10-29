import React from "react";
import ErrorIcon from '@material-ui/icons/Error';

export default function ConfirmUsername(props){
    const [username, setUsername] = React.useState("")
    const [error, setError] = React.useState("")

    const nextFunc = () =>{
        fetch("/confirmUsername/"+username)
        .then((res)=>{ if(res.status === 200){
            return props.next(username)
        }
        else{
            if(username === "")
            {
                setError("Vui lòng nhập Username")
            }
            else
            {
                setError("Username không tồn tại")
            }
        }
        })
    }

    return(
        <div className="form-group" style={{padding:"3vw", margin:"0px"}}>
            <label style={{fontSize:"1.1vw", color:"white"}}>Bạn hãy nhập username của bạn</label>
            <input type="text" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
            <div style={{fontSize:"1vw", color:"red"}}>
                {(error === "") ? null : <ErrorIcon /> }
                {error}
            </div>
            <button style={{marginTop:"2vw"}} className="btn btn-primary" onClick={()=>nextFunc()}>Next</button>
        </div>
    )
}

