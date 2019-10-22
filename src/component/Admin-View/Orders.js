import React from "react";

export default class Orders extends React.Component{
    render(){
        return(
            <div>
                <h1>Orders List</h1>
                {/* <div key={cartitem.productid} className="card" style={{ width: "95%", margin:"0px", marginBottom:"3%"}}>
                                <div className="row no-gutters">
                                    <div className="col-6 col-md-3 col-sm-4 col-xs-5">
                                        <img height="100%" width="100%" style={{position:'absolute'}} src={cartitem.image} alt="testproductimg"/>
                                    </div>
                                    <div className="col-6 col-md-9 col-sm-8 col-xs-7" style={{border:"1px solid darkorange", borderLeft:"0px", height:"8vw", position:"relative"}}>
                                        <Fab size="small" variant="extended" onClick={()=>{Promise.resolve(this.props.dispatch({type: "remove", cartitem})).then(()=>{this.totalcount(0,0)}).then(()=>{alert("sdsd")})}} style={{background: "red", width:"2vw", height:"2vw" ,position:"absolute", minWidth:"auto", padding:"1px", right:"-3%", top:"-8%"}}>
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
                                                            <button style={{width:"1.5vw", padding:"0px", fontSize:"1vw"}} className="btn btn-outline-primary btn-sm" disabled={cartitem.quantity===1} onClick={()=>{this.props.dispatch({type:"-quantity", cartitem}); this.totalcount(0,0)}}>-</button>
                                                            </div>
                                                            <input className="form-control-sm" type="text" disabled style={{width:"2vw",height:"2vw", fontSize:"1vw", padding:"0px",border:"0px", borderRadius:"0px",fontFamily: "sans-serif" ,textAlign:"center"}} value={cartitem.quantity}></input>
                                                            <div className="input-group-append"  style={{height:"2vw", width:"1.5vw"}} >
                                                            <button style={{width:"1.5vw", padding:"0px", fontSize:"1vw"}} className="btn btn-outline-primary btn-sm"disabled={cartitem.quantity===20} onClick={()=>{this.props.dispatch({type:"add", cartitem}); this.totalcount(0,0)}}>+</button>
                                                            </div>
                                                </div>            
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
            </div>
        )
    }
}