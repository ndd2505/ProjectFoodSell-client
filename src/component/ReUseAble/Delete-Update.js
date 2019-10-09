import React from 'react';
import {Link} from 'react-router-dom';

function DelUpl(props){
    return(
        <div className='btn-group'>
            <Link to={props.update}><button className='btn btn-warning' >Update</button></Link>
            <button className='btn btn-outline-danger' onClick={props.delete}>Delete</button>
        </div>
    )
}
export default DelUpl;