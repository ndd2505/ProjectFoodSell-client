import React from 'react';
import button from '@material-ui/core/button';

function NextPrev(props){
    return(
        <nav className='reusebar' style={{position:"relative", bottom:"0vw"}}>
        <div >
            <button style={{marginRight:"10px", height:"2.4vw", fontSize:"1.2vw", width:"5vw", padding:"0px"}} className='btn btn-outline-danger btn-md btn-sm' onClick={props.prev} disabled={props.dis}>prev</button>
            <button style={{marginLeft:"10px", height:"2.4vw", fontSize:"1.2vw", width:"5vw", padding:"0px"}} className='btn btn-outline-primary btn-md btn-sm' onClick={props.next} disabled={props.limit}>next</button>
        </div>
        </nav>
    )
}

export default NextPrev;