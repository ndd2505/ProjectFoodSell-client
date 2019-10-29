import React from "react";
import jwt_decode from "jwt-decode";
import {Link} from "react-router-dom";

const token = localStorage.getItem("keytoken")

export default class OrderCusView extends React.Component {

    constructor(props){
        super(props);
        this.state={
            orders:[]
        }
    }

    componentDidMount(){
        fetch("/ordercusview/"+jwt_decode(token).id)
        .then((res)=> res.json())
        .then((row) => this.setState({orders: row}))
    }
    render(){
        return (
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map((order)=>
                            <tr key={order.orderid} style={{textAlign:"left",fontSize:"1.2vw", color:(order.orderstatus === "Done") ? "green" : (order.orderstatus === "Cancel") ? "red" : "yellow"}}>
                                <th><Link style={{color:"currentColor"}} to={"/home/orderdetail/"+order.orderid}>{order.orderid}</Link></th>
                                <th>{order.name}</th>
                                <th>{order.timeorder}</th>
                                <th>{order.total+" VND"}</th>
                                <th>{(order.orderstatus==="Undone") ? "Order Processing" : (order.orderstatus==="Done") ? "Completed" : "Canceled"}</th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}