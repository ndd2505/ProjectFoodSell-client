import React from 'react';
import './SearchTool.css';


class SearchTool extends React.Component{
    constructor(props){
        super(props)
        this.aaa = React.createRef();
    }
    exportValue=()=>{
        this.props.onSet(this.aaa.current.value)
        console.log(this.aaa.current.value)
    }
    enterpress=(e)=>{
        if(e.keyCode === 13){
            this.props.onSet(this.aaa.current.value)
        }
    }
    render(){
        return(
            <nav className='reusebar'>
            <button className="btn btn-secondary dropdown-toggle" style={{position:"relative", height:'2.4vw', fontSize:"1.2vw", padding:"0px", width:"6vw"}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort By
            </button>
            <div className="dropdown-menu" style={{fontSize:"1.2vw"}} aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" onClick={()=>{this.props.sort(this.props.sortid,'ASC')}}>Sort by {this.props.sortby} Ascending</button>
                <button className="dropdown-item" onClick={()=>{this.props.sort(this.props.sortid,'DESC')}}>Sort by {this.props.sortby} Descending</button>
                <button className="dropdown-item" onClick={()=>{this.props.sort(this.props.sortname, 'ASC')}}>Sort by {(this.props.sortname === "total") ? "Total Ascending" : "Name A-Z"}</button>
                <button className="dropdown-item" onClick={()=>{this.props.sort(this.props.sortname, 'DESC')}}>Sort by {(this.props.sortname === "total") ? "Total Descending" : "Name Z-A"}</button>
            </div> 
            <div className="input-group" style={{ position:"relative", fontSize:"1.2vw" ,width:"20vw"}}>
                <div  className="input-group-prepend">
                    <button style={{ height:'2.4vw', fontSize:"1.2vw", width:"5vw", padding:"5%"}} className='btn btn-outline-success' onClick={this.exportValue} id='searchtext'>Search</button>
                </div>
                <input className='form-control inputsearch' style={{ height:'2.4vw', padding:"5%"}} ref={this.aaa} type='text' placeholder='Search Here...' onKeyDown={this.enterpress} />
            </div>
            </nav>
        )
    }
}

export default SearchTool