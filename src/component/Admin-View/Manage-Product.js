import React from 'react';
import './Manage-Product.css';

import SearchTool from '../ReUseAble/SearchTool';
import NextPrev from '../ReUseAble/NextPrev';
import DelUpl from '../ReUseAble/Delete-Update';

class ManageProduct extends React.Component {

  constructor(){
    super();
    this.state = {
      rows: [],
      sortitem: 'productid',
      sortdes: 'ASC',
      searchobj: ''
    }
    this.inputsearch= React.createRef();
  }
  i = 0
  componentDidMount() {
    fetch('/product/?orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
    .then((res) => res.json())
    .then(rows => this.setState({rows: rows} ))
  }

    next = ()=>{
        this.i=this.i+9
        fetch('/product/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
        .then((res) => res.json())
        .then(rows => this.setState({rows: rows} )) 
    }
    prev = () =>{
        if(this.i>0){
            this.i=this.i-9
            fetch('/product/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
            .then((res) => res.json())
            .then(rows => this.setState({rows: rows} )) 
        }  
    }
    setSearchText=(text)=>{
      this.setState({searchobj: text})
      if(text===''){
        fetch('/product/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
        .then((res) => res.json())
        .then(rows => this.setState({rows: rows} ))  
      }
      else{
      fetch('/product/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
      .then((res) => res.json())
      .then(rows => this.setState({rows: rows} ))
      }
    }
    
    sort=(sortitem, sortdes)=>{
      this.i = 0
      this.setState({sortitem: sortitem, sortdes: sortdes})
      fetch('/product/?search='+this.state.searchobj+'&orderby='+sortitem+'&sort='+sortdes+'&offset='+parseInt(this.i)+'&max=9')
      .then((res) => res.json())
      .then(rows => this.setState({rows: rows}))  
    }
    delete=(row)=>{
        const delid = row.productid
        if(window.confirm('Do you really want to delete this')){
          console.log('success delete: '+ delid)
          fetch('/delete-product?id='+delid)
          .then((res) => res.json())
          .then(rows => this.setState({rows: rows} ))  
          this.i = 0
        }
    }

    update=(row)=>{
      const updateid = row.productid
      console.log('success load update item: '+ updateid)
        
  }
    
    // searching=()=>{
    //   fetch('/search/:'+this.state.searchtext)
    //   .then((res) => res.json())
    //   .then(rows => this.setState({rows: rows} ))
    // }
  render(){
      return (
      <div>
        <SearchTool sortby='Price' sortid='price' sortname='productname' sort={this.sort} onSet={this.setSearchText}/>
        <div className="cardProduct" style={{left: "0px", position: "relative", width:"100%", marginTop:"3vw", borderBottom:"1px solid darkorange"}}>
        <div className='row card-group' style={{ minWidth: '60px', position:"relative", width:"100%", margin:"0px"}}>
          {this.state.rows.map(row =>
            <div id="card" className='text-center col-xs-12 col-sm-6 col-md-4 col-lg-4' style={{position:"relative", color:'darkorange'}} key={row.productid}>
                <img style={{width:"19.9vw", height:'13.6vw'}} src={row.image} className='card-img-top' alt={row.productname}/>
                <div className='card-body' style={{padding:"5%"}}>
                  <p style={{minHeight:"5.25vw", maxHeight:"5.25vw" ,fontSize:"1.7vw", margin:"0px"}} className='card-title'>{row.productname}</p>
                  <p style={{minHeight:"3.5vw", maxHeight:"3.5vw" ,fontSize:"1vw"}} className='card-text'>{row.info}</p>
                </div>
                <div className='card-footer' >
                {(row.promotionprice !== row.price) 
                  ? <p style={{fontSize:"1.7vw", margin:"0px", textDecoration:"line-through"}} className=' card-text'>{row.price} <span className="badge badge-danger">-{100-row.promotionprice*100/row.price}%</span></p>
                  : <p style={{fontSize:"1.7vw", margin:"0px"}} className=' card-text'>{row.price}</p>
                }
                {(row.promotionprice !== row.price) 
                ? <p style={{fontSize:"1.7vw", margin:"0px"}} className=' card-text'>{row.promotionprice}</p> 
                : <p style={{fontSize:"1.7vw", margin:"0px", visibility:"hidden"}} className=' card-text'>{row.promotionprice}</p> 
                }
                  <DelUpl update={'/admin/updateproduct/'+row.productid} delete={()=>{this.delete(row)}}/>
                </div>
            </div>
            )}
        </div>  
      </div> 
        <div >
          <NextPrev limit={this.state.rows.length !== 9} next={this.next} prev={this.prev} dis={this.i<=0}/>
        </div>   
      </div>
  )
  }
}

export default ManageProduct;
