import React from "react";
import {Link} from 'react-router-dom';

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
    handleDoneBtn=()=>{
        window.confirm("Are you want to complete this order ?")
    }
    render(){
        return(
            <div>
                <h1>Orders List</h1>
                <table className="table">
                    <thead>
                        <tr style={{color:"white", fontSize:"1.2vw"}}>
                            <th>Order ID</th>
                            <th>Order Placer</th>
                            <th>Time Order</th>
                            <th>Total</th>
                            <th>Order Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map((order)=>
                            <tr key={order.orderid} style={{textAlign:"left",fontSize:"1.2vw", color:(order.orderstatus === "done") ? "green" : (order.orderstatus === "cancel") ? "red" : "yellow"}}>
                                <th><Link style={{color:"currentColor"}} to={"/admin/orderdetail/"+order.orderid}>{order.orderid}</Link></th>
                                <th>{order.name}</th>
                                <th>{order.timeorder}</th>
                                <th>{order.total+" VND"}</th>
                                <th>{order.orderstatus}</th>
                                {(order.orderstatus === "undone") ? <th><button className="btn btn-sm btn-xs btn-md btn-success" onClick={()=>this.handleDoneBtn()}>Done</button></th> : null}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}