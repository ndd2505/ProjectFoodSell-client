import React from "react";
import {Link} from 'react-router-dom';
import SearchTool from "../ReUseAble/SearchTool";
import NextPrev from "../ReUseAble/NextPrev";

export default class Orders extends React.Component{

    constructor(props){
        super(props);
        this.state={
            orders:[],
            sortitem: 'orderid',
            sortdes: 'DESC',
            searchobj: "",
        }
        this.inputsearch= React.createRef();
    }
    i = 0
    componentDidMount(){
        fetch('/orders/?orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
        .then((res)=>res.json())
        .then(rows => this.setState({orders: rows}))
    }
    next = ()=>{
        this.i=this.i+9
        fetch('/orders/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
        .then((res) => res.json())
        .then(rows => this.setState({orders: rows} )) 
    }
    prev = () =>{
        if(this.i>0){
            this.i=this.i-9
            fetch('/orders/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
            .then((res) => res.json())
            .then(rows => this.setState({orders: rows} )) 
        }  
    }
    setSearchText=(text)=>{
      this.setState({searchobj: text})
      if(text===''){
        fetch('/orders/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
        .then((res) => res.json())
        .then(rows => this.setState({orders: rows} ))  
      }
      else{
      fetch('/orders/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
      .then((res) => res.json())
      .then(rows => this.setState({orders: rows} ))
      }
    }
    
    sort=(sortitem, sortdes)=>{
      this.i = 0
      this.setState({sortitem: sortitem, sortdes: sortdes})
      fetch('/orders/?search='+this.state.searchobj+'&orderby='+sortitem+'&sort='+sortdes+'&offset='+parseInt(this.i)+'&max=9')
      .then((res) => res.json())
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
                <SearchTool sortby='ID' sortid='orderid' sortname='total' sort={this.sort} onSet={this.setSearchText}/>
                
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
                                <button style={{height:"2.4vw", fontSize:"1.2vw", width:"5vw", padding:"0px"}} id={order.orderid} className="btn btn-sm btn-xs btn-md btn-success" onClick={(e)=>this.handleDoneBtn(e)} value="Done">Done</button>
                                <button style={{height:"2.4vw", fontSize:"1.2vw", width:"5vw", padding:"0px"}} id={order.orderid} className="btn btn-sm btn-xs btn-md btn-danger" onClick={(e)=>this.handleDoneBtn(e)} value="Cancel">Cancel</button>
                                </th>
                                : <th></th>}
                            </tr>
                        )}
                    </tbody>
                </table>
                <NextPrev limit={this.state.orders.length !== 9} next={this.next} prev={this.prev} dis={this.i<=0}/>
            </div>
        )
    }
}