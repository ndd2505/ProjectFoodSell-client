import React from "react";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import {Link} from 'react-router-dom';

export default function ConpleteOrder(){
    return(
        <div style={{color:"darkorange", textAlign:"center"}}>
        <h1 style={{fontSize:"4vw", color:"darkorange"}}>Chúc Mừng ! <CheckCircleOutlineIcon style={{fill: "green", fontSize:"3vw"}} /></h1>
        <h1 style={{fontSize:"3vw", color:"darkorange"}}>Đơn hàng của bạn đã được đặt thành công !</h1>
        <p style={{fontSize:"1.8vw",}}><strong style={{fontSize:"2.3vw",color:"white"}}>Vui lòng đợi chúng tôi ! <LocalShippingIcon style={{fill:"#ffc107", fontSize:"3vw"}} /></strong><br/>
        Đơn hàng sẽ được giao đến bạn trong 45' sau khi xác nhận đơn hàng.</p>       
        <p style={{fontSize:"1.8vw",}}><strong style={{fontSize:"2.3vw",color:"white"}}>Xin hãy giữ liên lạc ! <PhoneCallbackIcon style={{fill:"#ff0115", fontSize:"3vw"}} /></strong><br/>
        Nhân viên chúng tôi sẽ liên hệ với bạn để xác nhận đơn hàng trong ít phút.</p>
        <Link to="/home"><button className="btn btn-outline-danger" style={{textAlign:"center"}}>Quay Trở lại Trang Chủ ></button></Link>
        </div>
    )
}