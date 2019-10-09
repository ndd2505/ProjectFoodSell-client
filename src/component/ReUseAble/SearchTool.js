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
            <div >
            <nav className='reusebar'>
            <button className="btn btn-secondary dropdown-toggle" style={{float:"left", height:'35px'}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort By
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" onClick={()=>{this.props.sort(this.props.sortid,'ASC')}}>Sort by {this.props.sortby} Ascending</button>
                <button className="dropdown-item" onClick={()=>{this.props.sort(this.props.sortid,'DESC')}}>Sort by {this.props.sortby} Descending</button>
                <button className="dropdown-item" onClick={()=>{this.props.sort(this.props.sortname, 'ASC')}}>Sort by Name A-Z</button>
                <button className="dropdown-item" onClick={()=>{this.props.sort(this.props.sortname, 'DESC')}}>Sort by Name Z-A</button>
            </div> 
            <div>
            <input className='inputsearch' style={{float:"right", height:'35px'}} ref={this.aaa} type='text' placeholder='Search Here...' onKeyDown={this.enterpress} />
            <button style={{float:"right", height:'35px'}} className='btn btn-outline-success' onClick={this.exportValue} id='searchtext'>Search</button>
            </div>
            </nav>
            </div>
        )
    }
}

export default SearchTool