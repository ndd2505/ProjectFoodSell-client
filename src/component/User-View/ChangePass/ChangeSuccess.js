import React from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function CompleteChange(props){

    return(
        <div style={{textAlign:"center"}}>
            <h1 style={{color:"green", fontSize:"2vw"}}>Đổi Mật khẩu thành công <CheckCircleOutlineIcon /></h1>
            <br/>
            <button style={{width:"15vw"}} className="btn btn-outline-danger" onClick={()=>window.location.replace("http://localhost:3000/home")}>Quay Trở lại trang đăng nhập</button>
        </div>
    )
}