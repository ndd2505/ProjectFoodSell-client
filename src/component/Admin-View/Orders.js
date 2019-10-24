import React from "react";
import {Link} from 'react-router-dom';
import SearchTool from "../ReUseAble/SearchTool";

export default class Orders extends React.Component{

    constructor(props){
        super(props);
        this.state={
            orders:[]
        }
    }

    componentDidMount(){
        fetch("/orders")
        .then((res)=>res.json())
        .then(rows => this.setState({orders: rows}))
    }
    handleDoneBtn=(e)=>{
        const id = e.target.id
        const value = e.target.value
        const confirm = (e.target.value === "Done") ? "Bạn có muốn hoàn thành đơn hàng ?" : "Bạn có muốn huỷ đơn hàng ?"
        if(window.confirm(confirm)){
            fetch("/updatestatus/?id="+id+"&status="+value)
            .then((res)=>res.json())
            .then(rows => this.setState({orders: rows}))
        }
    }
    render(){
        return(
            <div>
                <SearchTool />
                <h1>Orders List</h1>
                <table className="table">
                    <thead>
                        <tr style={{color:"white", fontSize:"1.2vw"}}>
                            <th>Order ID</th>
                            <th>Order Placer</th>
                            <th>Time Order</th>
                            <th>Total</th>
                            <th>Order Status</th>
                            <th style={{textAlign:"center"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map((order)=>
                            <tr key={order.orderid} style={{textAlign:"left",fontSize:"1.2vw", color:(order.orderstatus === "Done") ? "green" : (order.orderstatus === "Cancel") ? "red" : "yellow"}}>
                                <th><Link style={{color:"currentColor"}} to={"/admin/orderdetail/"+order.orderid}>{order.orderid}</Link></th>
                                <th>{order.name}</th>
                                <th>{order.timeorder}</th>
                                <th>{order.total+" VND"}</th>
                                <th>{(order.orderstatus==="Undone") ? "Order Processing" : (order.orderstatus==="Done") ? "Completed" : "Canceled"}</th>
                                {(order.orderstatus === "Undone") ? <th style={{textAlign:"center"}}>
                                <button id={order.orderid} className="btn btn-sm btn-xs btn-md btn-success" onClick={(e)=>this.handleDoneBtn(e)} value="Done">Done</button>
                                <button id={order.orderid} className="btn btn-sm btn-xs btn-md btn-danger" onClick={(e)=>this.handleDoneBtn(e)} value="Cancel">Cancel</button>
                                </th>
                                : <th></th>}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}