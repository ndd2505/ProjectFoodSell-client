import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { connect } from "react-redux"

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';

const mapStateToProps = (state) =>{
  return { productincart : state}
}

class NavBar extends React.Component {
  navliststyle = {
    color: 'black',
  }
  render(){
  return (
    <div >
    <nav className='navbar'>
      <Link to="/">
      <img className='logo' src='https://cdn.iconscout.com/icon/free/png-256/food-809-675214.png' alt='logofood'/>
      </Link>
      <ul className='nav-links'>
        {this.props.navitems.map(navitem => 
        <Link key={navitem.linkname} style={this.navliststyle} to={navitem.linkto}><li>{navitem.linkname}</li></Link>
          )}
        <div className="shoppingcart" style={{position: "relative", borderLeft: "2px solid black",left:"-20px" ,backgroundColor:"darkorange" ,width:"150px" ,top: "-6px"}}>
          <Badge badgeContent={this.props.productincart.length} color="primary" style={{position: "relative" ,top: "0px", left:"10px",float: "left" ,}}>
            <ShoppingCartIcon style={{fontSize: "35px"}} />
          </Badge>
          <Link to={"/home/cart"} style={this.navliststyle}><li style={{position: "relative", top:"7px", left: "20px", textAlign:"center"}}>ShoppingCart</li></Link>
        </div>
      </ul>
    </nav>
    </div>
  );
  }
}

export default connect(mapStateToProps)(NavBar);