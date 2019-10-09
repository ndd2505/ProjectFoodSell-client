import React from 'react';
import SearchTool from '../ReUseAble/SearchTool';
import NextPrev from '../ReUseAble/NextPrev';
import './view.css';

class ProductShow extends React.Component {

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
        .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows)))
      }
    
        next = ()=>{
            this.i=this.i+9
            fetch('/product/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
            .then((res) => res.json())
            .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows))) 
        }
        prev = () =>{
            if(this.i>0){
                this.i=this.i-9
                fetch('/product/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
                .then((res) => res.json())
                .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows))) 
            }  
        }
        setSearchText=(text)=>{
          this.setState({searchobj: text})
          if(text===''){
            fetch('/product/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
            .then((res) => res.json())
            .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows)))  
          }
          else{
          fetch('/product/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
          .then((res) => res.json())
          .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows)))
          }
        }
        
        sort=(sortitem, sortdes)=>{
          this.i = 0
          this.setState({sortitem: sortitem, sortdes: sortdes})
          fetch('/product/?search='+this.state.searchobj+'&orderby='+sortitem+'&sort='+sortdes+'&offset='+parseInt(this.i)+'&max=9')
          .then((res) => res.json())
          .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows)))  
        }

    render(){
        return(
            <div className='viewproduct'>
        <SearchTool sortby='Price' sortid='price' sortname='productname' sort={this.sort} onSet={this.setSearchText}/>
      <div className="cardProduct">
        <div className='row card-group' style={{ width: '60rem'}}>
          {this.state.rows.map(row =>
            <div className='text-center col-4' style={{color:'darkorange'}} key={row.productid}>
                <img src={row.image} height='170px' className='card-img-top' alt={row.productname}/>
                <div className='card-body' style={{height: '140px'}}>
                  <h4 className='card-title'>{row.productname}</h4>
                  <small className='card-text'>{row.info}</small>
                </div>
                <div className='card-footer'>
                  <h5 className=' card-text'>{row.price}</h5>
                  <button className='btn btn-warning' style={{width:'100%'}}>Buy</button>
                </div>
            </div>
            )}
        </div>  
      </div> 
        <div >
          <NextPrev next={this.next} prev={this.prev} dis={this.i<=0}/>
        </div>   
      </div>
        )
    }
}

export default ProductShow