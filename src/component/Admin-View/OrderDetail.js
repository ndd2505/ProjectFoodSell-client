import React from "react";

export default class OrderDetail extends React.Component{

    constructor(props){
        super(props);
        this.state={
            orderdetail:[],
            orderplacer:{}
        }
    }

    orderid = this.props.match.params.id

    componentDidMount(){
        fetch("/orderdetail/"+this.props.match.params.id+"")
        .then((res)=>res.json())
        .then(rows => this.setState({orderdetail: rows}))

        fetch("/orderplacerdetail/"+this.props.match.params.id+"")
        .then((res)=>res.json())
        .then(rows => this.setState({orderplacer: rows[0]}))
        
    }

    render(){
        console.log(this.state.orderdetail[0])
        return(
            <div style={{fontSize:"0.8vw"}}>
                <div  style={{textAlign:"left", color:"white",fontSize:"2vw" ,borderBottom:"1px solid darkorange"}}>
                    Ma Don Hang: #{this.state.orderplacer.orderid}
                    <br/>
                    Trang Thai Don Hang: {this.state.orderplacer.orderstatus}
                </div>
                <div className="row card-deck" style={{textAlign:"left",margin:"0px", color:"white", borderBottom:"1px solid darkorange"}}>
                        <div className="card col-4 col-md-4 col-xs-4 col-sm-4 col-lg-4" style={{padding:"0px", border:"0px", backgroundColor:"darkorange", margin:"1vw"}}>
                            <div className="card-header" style={{color:"black", padding:"0.9vw"}}>
                                Thong tin dat hang
                            </div>
                        <div className="card-body" style={{color:"darkorange", padding:"0.9vw"}}>
                            Nguoi dat hang: {this.state.orderplacer.name}
                            <br/>
                            Dia Chi: {this.state.orderplacer.address}
                            <br/>
                            So Dien thoai: {this.state.orderplacer.phone}
                        </div>
                    </div>
                    <div className="card col-4 col-md-4 col-xs-4 col-sm-4 col-lg-4" style={{padding:"0px", border:"0px", backgroundColor:"darkorange", margin:"1vw"}}>
                        <div className="card-header" style={{color:"black", padding:"0.9vw"}}>
                            Hinh thuc thanh toan
                        </div>
                        <div className="card-body" style={{color:"darkorange", padding:"0.9vw"}}>
                            Thanh Toan Tien Mat
                        </div>
                    </div>
                    <div className="card col-4 col-md-4 col-xs-4 col-sm-4 col-lg-4" style={{padding:"0px", border:"0px", backgroundColor:"darkorange", margin:"1vw"}}>
                        <div className="card-header" style={{color:"black", padding:"0.9vw"}}>
                        Tong gia tri don hang
                        </div>
                        
                        <div className="card-body"  style={{color:"darkorange", padding:"0.9vw"}}>
                            Tong Tien(Truoc Giam Gia): {this.state.orderplacer.total}
                            <br/>
                            Giam Gia: {this.state.orderplacer.promotion}
                            <br/>
                            Tong Tien(Phai Thanh Toan): {this.state.orderplacer.total - this.state.orderplacer.promotion}
                        </div>
                    </div>
                </div>
                <div style={{textAlign:"left", marginTop:"3vw"}}>
                    <table className="table">
                        <thead  >
                            <tr className="row" style={{color:"white"}}>
                                <th className="col-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">Mon An</th>
                                <th className="col-2 col-lg-2 col-md-2 col-sm-1 col-xs-1">Gia</th>
                                <th className="col-2 col-lg-2 col-md-2 col-sm-1 col-xs-1">So luong</th>
                                <th className="col-2 col-lg-2 col-md-2 col-sm-1 col-xs-1">Tong Cong</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.state.orderdetail.map((product)=>
                                <tr className="row" style={{color:"white"}} key={product.orderproductid}>
                                    <th className="col-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">{product.productname}</th>
                                    <th className="col-2 col-lg-2 col-md-2 col-sm-1 col-xs-1">{product.price}</th>
                                    <th className="col-2 col-lg-2 col-md-2 col-sm-1 col-xs-1">{product.quantity}</th>
                                    <th className="col-2 col-lg-2 col-md-2 col-sm-1 col-xs-1">{product.totalprice}</th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}