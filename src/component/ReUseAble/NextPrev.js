import React from 'react';
import button from '@material-ui/core/button';

function NextPrev(props){
    return(
        <nav className='reusebar'>
        <div style={{position: "relative",left: 0, right: 0, top: '20px'}}>
            <button className='btn btn-outline-danger' onClick={props.prev} disabled={props.dis}>prev</button>
            <button className='btn btn-outline-primary' onClick={props.next} >next</button>
        </div>
        </nav>
    )
}

export default NextPrev;