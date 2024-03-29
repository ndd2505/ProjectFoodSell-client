import React from 'react';
import './Manage-User.css';

import SearchTool from '../ReUseAble/SearchTool';
import NextPrev from '../ReUseAble/NextPrev';

class CustomerManager extends React.Component {

  constructor(){
    super();
    this.state = {
      rows: [],
      sortitem: 'cusid',
      sortdes: 'ASC',
      searchobj: ''
    }
    this.inputsearch= React.createRef();
  }
  i = 0
  componentDidMount() {
    fetch('/customer/?orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=6')
    .then((res) => res.json())
    .then(rows => this.setState({rows: rows} ))
  }

    next = ()=>{
        this.i=this.i+6
        fetch('/customer/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=6')
        .then((res) => res.json())
        .then(rows => this.setState({rows: rows} )) 
    }
    prev = () =>{
        if(this.i>0){
            this.i=this.i-6
            fetch('/customer/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=6')
            .then((res) => res.json())
            .then(rows => this.setState({rows: rows} )) 
        }  
    }
    setSearchText=(text)=>{
      this.setState({searchobj: text})
      if(text===''){
        fetch('/customer/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=6')
        .then((res) => res.json())
        .then(rows => this.setState({rows: rows} ))  
      }
      else{
      fetch('/customer/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=6')
      .then((res) => res.json())
      .then(rows => this.setState({rows: rows} ))
      }
    }
    
    sort=(sortitem, sortdes)=>{
      this.i = 0
      this.setState({sortitem: sortitem, sortdes: sortdes})
      fetch('/customer/?search='+this.state.searchobj+'&orderby='+sortitem+'&sort='+sortdes+'&offset='+parseInt(this.i)+'&max=6')
      .then((res) => res.json())
      .then(rows => this.setState({rows: rows} ))  
    }
    delete=(row)=>{
        const delid = row.cusid
        if(window.confirm('Do you really want to delete this')){
          console.log('success delete: '+ delid)
          fetch('/delete-customer?id='+delid)
          .then((res) => res.json())
          .then(rows => this.setState({rows: rows} ))  
          this.i = 0
        }
    }
    
    // searching=()=>{
    //   fetch('/search/:'+this.state.searchtext)
    //   .then((res) => res.json())
    //   .then(rows => this.setState({rows: rows} ))
    // }
  render(){
      return (
      <div className="listTable">
        <SearchTool sortby='ID' sortid='cusid' sortname='username' sort={this.sort} onSet={this.setSearchText}/>
        <table className='table' border='1' style={{backgroundColor: 'white'}} >
        <thead className='thead-dark' >
            <tr>
                <th>Cus-Id</th>
                <th>FullName</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Email</th>
                <th>UserName</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {this.state.rows.map(row =>
            <tr key={row.cusid} border='1'>
              <th>{row.cusid}</th>
              <th>{row.name}</th>
              <th>{row.gender}</th>
              <th>{row.phone}</th>
              <th>{row.address}</th>
              <th>{row.email}</th>
              <th>{row.username}</th>
              <th><button style={{height:"2.4vw", fontSize:"1.2vw", width:"5vw", padding:"0px"}} className='btn btn-danger' onClick={()=>{this.delete(row)}}>Delete</button></th> 
            </tr>
            )}
        </tbody>   
      </table>
      <NextPrev limit={this.state.rows.length !== 6} next={this.next} prev={this.prev} dis={this.i<=0}/>
      </div>
  );
  }
}

export default CustomerManager;
