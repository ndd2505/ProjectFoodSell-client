import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';

const mapStateToProps = (state) =>{
  return { productincart : state}
}

const token = sessionStorage.getItem("keytoken")
class NavBar extends React.Component {
  navliststyle = {
    color: 'black',
  }

  logout = () =>{
    sessionStorage.clear()
    window.location.replace("http://localhost:3000/home/login")
  }

  navitemcus = [
    {linkto: "/home", linkname: "Home"},
    {linkto: "/home/about", linkname: "About"},
    {linkto: "/home/info", linkname: "Account"},
    {linkto: "/home/orders", linkname: "Orders"}
  ]

  navitemsadmin = [
    {linkto: "/admin/user", linkname: "User"},
    {linkto: "/admin/product", linkname: "Product"},
    {linkto: "/admin/adduser", linkname: "AddUser"},
    {linkto: "/admin/addproduct", linkname: "AddProduct"},
    {linkto: "/admin/customer", linkname: "Customer"},
    {linkto: "/admin/orders", linkname:"Orders"},
    {linkto: "/admin/chart", linkname:"Chart"}
  ]

  render(){
  return (
    <nav className='navbar navbar-expand-lg navbar-light ' style={{backgroundColor:"darkorange", width:"100%", height:"4vw", padding:"0px"}}>
      <Link className="navbar-brand" to={(token === null) ? "/home" : (jwt_decode(token).role === "admin") ? "/admin" : "/home"} style={{padding:"0px"}}>
      <img style={{width: "4.5vw", height:"3.5vw"}} src='https://cdn.iconscout.com/icon/free/png-256/food-809-675214.png' alt='logofood'/>
      </Link>
      <div className="navbar-toggler" data-toggle="collapse" aria-haspopup="true" aria-expanded="false" style={{padding:"0px"}}>
      <button className="btn" type="button" data-toggle="dropdown" style={{padding:"0px"}}>
        <span className="navbar-toggler-icon" style={{width:"3.5vw", height:"2vw"}}></span>
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{left:"79vw", backgroundColor:"darkorange", fontSize:"1.5vw" }}>
          {
          (token === null) 
          ? this.props.navitems.map(navitem => 
          <Link className="dropdown-item" key={navitem.linkname} style={this.navliststyle} to={navitem.linkto}>
            {navitem.linkname}
          </Link>
          )
          : (jwt_decode(token).role === "admin")
          ? this.navitemsadmin.map(navitem => 
          <Link className="dropdown-item" key={navitem.linkname} style={this.navliststyle} to={navitem.linkto}>
            {navitem.linkname}
          </Link>
          ) 
          : this.navitemcus.map(navitem => 
            <Link className="dropdown-item" key={navitem.linkname} style={this.navliststyle} to={navitem.linkto}>
            {navitem.linkname}
            </Link>
          )
          }
          {(this.props.navitems[0].linkto.split("/")[1] !== "admin") ? <Link className="dropdown-item" to={"/home/cart"} style={{color:"black" ,display:"flex"}}>
            <Badge badgeContent={this.props.productincart.length} color="primary" style={{position: "relative" ,top: "0px", left:"0px",float: "left" ,}}>
              <ShoppingCartIcon style={{fontSize: "2vw"}} />
              ShoppingCart
            </Badge>
          </Link>
        : null  
        }
        {(sessionStorage.getItem("keytoken") !== null) ? <button className="dropdown-item" style={{fontSize:"1.5vw"}} onClick={()=>this.logout()}>logout</button> : null}
      </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav" style={{width:"100%"}}>
      <ul className='navbar-nav'>
        {this.props.product}
        {this.props.user}
        {this.props.navitems.map(navitem => 
        <li className="nav-item" key={navitem.linkname}>
          <Link className="nav-link"  style={this.navliststyle} to={navitem.linkto}>
            {navitem.linkname}
          </Link>
        </li>
          )}
          {this.props.order}
          {this.props.account}
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