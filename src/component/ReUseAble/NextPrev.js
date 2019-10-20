import React from 'react';
import button from '@material-ui/core/button';

function NextPrev(props){
    return(
        <nav className='reusebar' style={{position:"relative", bottom:"-50px"}}>
        <div >
            <button style={{marginRight:"10px", fontSize:"1.4vw"}} className='btn btn-outline-danger btn-md btn-sm' onClick={props.prev} disabled={props.dis}>prev</button>
            <button style={{marginLeft:"10px", fontSize:"1.4vw"}} className='btn btn-outline-primary btn-md btn-sm' onClick={props.next} disabled={props.limit}>next</button>
        </div>
        </nav>
    )
}

export default NextPrev;