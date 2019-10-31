import React from 'react';
import {Link} from 'react-router-dom';

function DelUpl(props){
    return(
        <div className='btn-group'>
            <button style={{height:"2.4vw", fontSize:"1.2vw", width:"5vw", padding:"0px"}} className='btn btn-warning' ><Link to={props.update} style={{color:"black"}}>Update</Link></button>
            <button style={{height:"2.4vw", fontSize:"1.2vw", width:"5vw", padding:"0px"}} className='btn btn-outline-danger' onClick={props.delete}>Delete</button>
        </div>
    )
}
export default DelUpl;