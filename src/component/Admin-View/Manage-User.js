import React from 'react';
import './Manage-User.css';

import SearchTool from '../ReUseAble/SearchTool';
import NextPrev from '../ReUseAble/NextPrev';
import DelUpl from '../ReUseAble/Delete-Update';

class ManageUser extends React.Component {

  constructor(){
    super();
    this.state = {
      rows: [],
      sortitem: 'id',
      sortdes: 'ASC',
      searchobj: ''
    }
    this.inputsearch= React.createRef();
  }
  i = 0
  componentDidMount() {
    fetch('/users/?orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=6')
    .then((res) => res.json())
    .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows)))
  }

    next = ()=>{
        this.i=this.i+6
        fetch('/users/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=6')
        .then((res) => res.json())
        .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows))) 
    }
    prev = () =>{
        if(this.i>0){
            this.i=this.i-6
            fetch('/users/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=6')
            .then((res) => res.json())
            .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows))) 
        }  
    }
    setSearchText=(text)=>{
      this.setState({searchobj: text})
      if(text===''){
        fetch('/users/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=6')
        .then((res) => res.json())
        .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows)))  
      }
      else{
      fetch('/users/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=6')
      .then((res) => res.json())
      .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows)))
      }
    }
    
    sort=(sortitem, sortdes)=>{
      this.i = 0
      this.setState({sortitem: sortitem, sortdes: sortdes})
      fetch('/users/?search='+this.state.searchobj+'&orderby='+sortitem+'&sort='+sortdes+'&offset='+parseInt(this.i)+'&max=6')
      .then((res) => res.json())
      .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows)))  
    }
    delete=(row)=>{
        const delid = row.id
        if(window.confirm('Do you really want to delete this')){
          console.log('success delete: '+ delid)
          fetch('/delete-user?id='+delid)
          .then((res) => res.json())
          .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows)))  
          this.i = 0
        }
    }

    update=(row)=>{
      const updateid = row.id
      console.log('success load update item: '+ updateid)
        
  }
    
    // searching=()=>{
    //   fetch('/search/:'+this.state.searchtext)
    //   .then((res) => res.json())
    //   .then(rows => this.setState({rows: rows}, () => console.log('Customers fetched...', rows)))
    // }
  render(){
      return (
      <div className="listTable">
        <SearchTool sortby='ID' sortid='id' sortname='username' sort={this.sort} onSet={this.setSearchText}/>
        <table className='table' border='1' style={{backgroundColor: 'white'}} >
        <thead className='thead-dark' >
            <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Password</th>
                <th>HoTen</th>
                <th>Email</th>
                <th>Update</th>
            </tr>
        </thead>
        <tbody>
          {this.state.rows.map(row =>
            <tr key={row.id} border='1'>
              <th>{row.id}</th>
              <th>{row.username}</th>
              <th>{row.password}</th>
              <th>{row.hoten}</th>
              <th>{row.email}</th>
              <th><DelUpl update={'/admin/updateuser/'+row.id} delete={()=>{this.delete(row)}}/></th>
            </tr>
            )}
        </tbody>   
      </table>
      <NextPrev limit={this.state.rows.length !== 6} next={this.next} prev={this.prev} dis={this.i<=0}/>
      </div>
  );
  }
}

export default ManageUser;
