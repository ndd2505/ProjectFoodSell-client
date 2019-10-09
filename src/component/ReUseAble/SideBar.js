import React from 'react';
import './SideBar.css'

class SideBar extends React.Component{
    render(){
        return(
            <div id='sidebar'>
                <ul>
                    <li style={{borderBottom: '1px solid darkorange', height:'45px', textAlign: 'center'}}>Categorie</li>
                    <li><button className='btn btn-outline' style={{backgroundColor:'darkorange', width:'100%', height: '45px'}}>Hasdf</button></li>
                    <li><button className='btn btn-outline' style={{backgroundColor:'darkorange', width:'100%', height: '45px'}}>fasfe</button></li>
                    <li><button className='btn btn-outline' style={{backgroundColor:'darkorange', width:'100%', height: '45px'}}>wewfds</button></li>
                </ul>
            </div>
        )    
    }
}

export default SideBar