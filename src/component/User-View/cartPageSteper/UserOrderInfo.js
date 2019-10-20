import React from "react";

export default function UserOrderInfo(props){
    return(
        <div className="userorderinfo" style={{position:"relative", textAlign:"center" }}>
            <div className="form-group">
                <label style={{color:"darkorange"}}>Họ Và Tên</label>
                <input className="form-control" type="text"></input>
            </div>
            <div className="form-group">
                <label style={{color:"darkorange"}}>Số Điện Thoại</label>
                <input className="form-control" type="text"></input>
            </div>
            <div className="form-group">
                <label style={{color:"darkorange"}}>Email</label>
                <input className="form-control" type="text"></input>
            </div>
            <div className="form-group">
                <label style={{color:"darkorange"}}>Địa Chỉ</label>
                <input className="form-control" type="text"></input>
                <br/>
                <div className="row">
                    <div className="col">
                        <select class="form-control" style={{padding:"0px"}}>
                            <option>Phường 1</option>
                        </select>
                    </div>
                    <div className="col">
                        <select class="form-control" style={{padding:"0px"}}>
                            <option>Quận 1</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={props.next}>Xác Nhận</button>
        </div>
    )
}