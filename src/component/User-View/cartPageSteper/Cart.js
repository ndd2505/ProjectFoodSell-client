import React from "react";
import { connect } from "react-redux"
import CancelIcon from '@material-ui/icons/Cancel';
import { Fab } from "@material-ui/core";

const mapStateToProps = (state) =>{
    return { productincart : state}
}



class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            total: 0,
            cashOutError: ""
        }
    }
    
    componentDidMount(){
        this.totalcount(0,0)
    }
    
    totalcount = (total,i)=>{
        if(i<this.props.productincart.length){
            const sumtotal = total + (this.props.productincart[i].price*this.props.productincart[i].quantity)
                const i2 = i+1
                this.totalcount(sumtotal, i2)
        }else{
            this.setState({total: total})
        }
    }

    del = (cartitem, total, i) =>{
        Promise.resolve(this.props.dispatch({type:"remove", cartitem}))
        .then(()=>{
        this.totalcount(0,0)
    }
        )
    }

    validate = () =>{
        let cashOutError = ""
        if(this.props.productincart.length === 0){
            cashOutError = " Chưa có sản phẩm nào trong giỏ hàng !!!"
            this.setState({cashOutError: cashOutError})
            return false
        }else{
            return true
        }
    }
    handleSubmit=(func)=>{
        const valid = this.validate()
        if(valid){
            this.props.hanldeTotal(this.state.total)
        }
    }

    render(){
    return(
            <div className=" bodycartpage">
                <div className="row" style={{paddingTop: "5vw", paddingBottom:"20px", position:"relative", left:"0px", minHeight: "50vw" }}>
                    <div className="col-6 col-md-8 col-sm-7 col-xs-6" style={{top:"-14px", padding:"0px"}} >
                            {this.props.productincart.map(cartitem => 
                            <div key={cartitem.productid} className="card" style={{ width: "95%", margin:"0px", marginBottom:"3%", padding:"1vw"}}>
                                <div className="row no-gutters">
                                    <div className="col-6 col-md-3 col-sm-4 col-xs-5">
                                        <img height="100%" width="100%" style={{position:'absolute'}} src={cartitem.image} alt="testproductimg"/>
                                    </div>
                                    <div className="col-6 col-md-9 col-sm-8 col-xs-7" style={{border:"1px solid darkorange", borderLeft:"0px", height:"8vw", position:"relative"}}>
                                        <Fab size="small" variant="extended" onClick={()=>{Promise.resolve(this.props.dispatch({type: "remove", cartitem})).then(()=>{this.totalcount(0,0)}).then(()=>{window.confirm("Bạn có muốn xoá sản phẩm khỏi giỏ hàng ?")})}} style={{background: "red", width:"2vw", height:"2vw" ,position:"absolute", minWidth:"auto", padding:"1px", right:"-3%", top:"-8%"}}>
                                                    <CancelIcon style={{height:"1.7vw", width:"1.7vw"}} />
                                        </Fab>
                                        <div style={{ padding:"5%"}}>
                                        <div className="row" style={{color:"darkorange",position:"relative", paddingBottom:"3%", margin:"1%"}}>
                                            <p className="col-6 col-sm-6 col-md-6 col-xs-6 col-lg-6" style={{textAlign:"left",margin:"0px", padding:"0px" ,fontSize:"1.2vw", position:"relative"}}>{cartitem.productname}</p>
                                            <p className="col-6 col-sm-6 col-md-6 col-xs-6 col-lg-6" style={{textAlign:"right",margin:"0px", padding:"0px" , fontSize:"1.2vw", position:"relative"}}>Số Lượng</p>
                                        </div>
                                        <div  className="row" style={{position:"relative", margin:"1%"}}>
                                            <p className="col-6 col-sm-6 col-md-6 col-xs-6 col-lg-6" style={{textAlign:"left",margin:"0px", padding:"0px" ,color:"darkorange" ,fontSize:"1.2vw", position:"relative"}}>{cartitem.price}</p>
                                            <div className="col-6 col-sm-6 col-md-6 col-xs-6 col-lg-6" style={{padding:"0px"}}>
                                                <div className="input-group"  style={{float:"right", width:"5vw"}}>
                                                            <div className="input-group-prepend"  style={{height:"2vw", width:"1.5vw"}}>
                                                            <button style={{width:"1.5vw", padding:"0px", fontSize:"1vw", height:"2vw"}} className="btn btn-outline-primary btn-sm" disabled={cartitem.quantity===1} onClick={()=>{this.props.dispatch({type:"-quantity", cartitem}); this.totalcount(0,0)}}>-</button>
                                                            </div>
                                                            <input className="form-control-sm" type="text" disabled style={{width:"2vw",height:"2vw", fontSize:"1vw", padding:"0px",border:"0px", borderRadius:"0px",fontFamily: "sans-serif" ,textAlign:"center"}} value={cartitem.quantity}></input>
                                                            <div className="input-group-append"  style={{height:"2vw", width:"1.5vw"}} >
                                                            <button style={{width:"1.5vw", padding:"0px", fontSize:"1vw", height:"2vw"}} className="btn btn-outline-primary btn-sm"disabled={cartitem.quantity===20} onClick={()=>{this.props.dispatch({type:"add", cartitem}); this.totalcount(0,0)}}>+</button>
                                                            </div>
                                                </div>            
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                    </div>
                    <div className="col-6 col-sm-5 col-xs-6 col-md-4" style={{padding:"0px", paddingLeft:"1vw",borderLeft: "1px solid darkorange", position:"sticky", maxHeight:"500px", top:"10px"}}>
                        <div className="card" style={{margin: "0px",position:"unset",background:"transparent",fontFamily:"monospace",left:"-20px" ,maxWidth: "100%",color:"darkorange", maxHeight:"400px", minHeight:"100px", padding:"0px"}}>
                            <div className=" cardheader" style={{textAlign: "center", fontSize: "2.6vw",height:"4vw"}}>Total</div>
                            <table className=" cardbody table table-sm table-borderless" style={{ top:"80px",color:"darkorange" ,fontSize:"1.3vw"}}>
                                <tbody>
                                    <tr style={{borderBottom:"1px solid darkorange"}}>
                                        <td style={{ textAlign:"left"}}>Total Price</td>
                                        <td style={{ textAlign:"right"}}>{this.state.total+"  VND"}</td>
                                    </tr>
                                    <tr style={{borderBottom:"1px solid darkorange"}}>
                                        <td style={{ textAlign:"left"}}>Discount</td>
                                        <td style={{ textAlign:"right"}}>0</td>
                                    </tr>
                                    <tr style={{borderBottom:"1px solid darkorange"}}>
                                        <td style={{ textAlign:"left"}}>Total Pay</td>
                                        <td style={{ textAlign:"right"}}>{this.state.total+"  VND"}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style={{position:"relative", top:"2vw"}}>
                            <img  style={{ height:"1.5vw", position:"relative"}} src="../../../image/creditcard.png" width="40%" alt="creditcard"/>
                            <br/>
                            <button className=" btn btn-danger" style={{fontSize:"1.2vw", width:"19vw", height:"3vw", padding:"0px", position:"relative"}} onClick={()=>{this.handleSubmit()}}>Thanh Toan</button>
                            <div style={{textAlign: "center", color:"red", fontSize:"1.4vw"}}>
                                {this.state.cashOutError}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}

export default connect(mapStateToProps)(Cart)