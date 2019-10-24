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
    <nav className='navbar navbar-expand-lg navbar-light ' style={{backgroundColor:"darkorange", width:"100%", height:"4vw", padding:"0px"}}>
      <Link className="navbar-brand" to="/admin" style={{padding:"0px"}}>
      <img style={{width: "4.5vw", height:"3.5vw"}} src='https://cdn.iconscout.com/icon/free/png-256/food-809-675214.png' alt='logofood'/>
      </Link>
      <div className="navbar-toggler" data-toggle="collapse" aria-haspopup="true" aria-expanded="false" style={{padding:"0px"}}>
      <button type="button" data-toggle="dropdown" style={{padding:"0px"}}>
        <span className="navbar-toggler-icon" style={{width:"3.5vw", height:"3vw"}}></span>
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{left:"79vw", backgroundColor:"darkorange", fontSize:"1.5vw" }}>
        {this.props.navitems.map(navitem => 
          <Link className="dropdown-item" key={navitem.linkname} style={this.navliststyle} to={navitem.linkto}>
            {navitem.linkname}
          </Link>
          )}
          {(this.props.navitems[0].linkto.split("/")[1] !== "admin") ? <Link className="dropdown-item" to={"/home/cart"} style={{color:"black" ,display:"flex"}}>
            <Badge badgeContent={this.props.productincart.length} color="primary" style={{position: "relative" ,top: "0px", left:"0px",float: "left" ,}}>
              <ShoppingCartIcon style={{fontSize: "2vw"}} />
              ShoppingCart
            </Badge>
          </Link>
        : null  
        }
      </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav" style={{width:"100%"}}>
      <ul className='navbar-nav'>
        {this.props.navitems.map(navitem => 
        <li className="nav-item" key={navitem.linkname}>
          <Link className="nav-link"  style={this.navliststyle} to={navitem.linkto}>
            {navitem.linkname}
          </Link>
        </li>
          )}
      </ul>

        { (this.props.navitems[0].linkto.split("/")[1]!=="admin") ? <Link to={"/home/cart"} style={{color:"black" ,display:"flex", right:"2vw", position:"absolute"}}>
            <Badge badgeContent={this.props.productincart.length} color="primary" style={{position: "relative" ,top: "0px", left:"0px",float: "left" ,}}>
              <ShoppingCartIcon style={{fontSize: "2vw"}} />
              ShoppingCart
            </Badge>
          </Link>
          : null
        }

      </div>
    </nav>

  );
  }
}

export default connect(mapStateToProps)(NavBar);