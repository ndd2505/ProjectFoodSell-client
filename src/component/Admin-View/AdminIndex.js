import React from 'react';
import '../../App.css';
import ManageUser from './Manage-User';
import NavBar from '../NavBar';
import Adding from '../Modify Data/Adding-User';
import UpdateUser from '../Modify Data/Update-User';
import ManageProduct from './Manage-Product';
import AddingProduct from '../Modify Data/Adding-Product';
import UpdateProduct from '../Modify Data/Update-Product';
import Orders from "./Orders";
import OrderDetail from "./OrderDetail";
import Chart from "./Chart";
import {Link, Redirect} from "react-router-dom"
import jwt_decode from 'jwt-decode';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CustomerManager from './Customer-Manager';

const token = sessionStorage.getItem("keytoken")
const PrivateRoute = ({component: Component, ...rest }) =>(
  <Route {...rest} render={(props) =>(
    jwt_decode(token).author === "superadmin"
    ? <Component {...props} />
    : <Redirect to='/admin' />
  )} />
)

class AdminIndex extends React.Component {

  navitems = [
    {linkto: "/admin/customer", linkname: "Customer"}
  ]
  navitemlower = [
    {linkto: "/admin/orders", linkname: "Order"}
  ]

  componentDidMount(){
    console.log('mount admin')
  }

  account = () =>{
    const logout = () =>{
      sessionStorage.clear();
      window.location.replace("http://localhost:3000/home/login")
    }
    return(
      <li className="nav-item">
        <button className="nav-link" style={{background:"transparent", color:"black", border:"0px"}} onClick={()=>{logout()}}>Logout</button>
      </li>
    )
  }

  User = () => {
    return(
      <li className="nav-item dropdown active" >
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
          User Manage
        </Link>
          <div style={{ textAlign:"center", backgroundColor:"darkorange"}} className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link style={{color:"black"}} to="/admin/user">User Manage</Link>
            <div className="dropdown-divider"></div>
            <Link style={{color:"black"}} to="/admin/adduser">Add User</Link>
          </div>
      </li>
    )
  }

  Product = () =>{
    return(
      <li className="nav-item dropdown active">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
          Product Manage
        </Link>
          <div className="dropdown-menu" style={{ textAlign:"center", backgroundColor:"darkorange"}} aria-labelledby="navbarDropdown">
            <Link style={{color:"black"}} to="/admin/product">Product Manage</Link>
            <div className="dropdown-divider"></div>
            <Link style={{color:"black"}} to="/admin/addproduct">Add Product</Link>
          </div>
      </li>
    )
  }

  Order = () => {
    return(
      <li className="nav-item dropdown active">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
          Order Manage
        </Link>
          <div className="dropdown-menu" style={{ textAlign:"center", backgroundColor:"darkorange"}} aria-labelledby="navbarDropdown">
            <Link style={{color:"black"}} to="/admin/orders">Order Manage</Link>
            <div className="dropdown-divider"></div>
            <Link style={{color:"black"}} to="/admin/chart">Chart</Link>
          </div>
      </li>
    )
  }

  render(){
  return (
    <Router>
      <div>
        {(jwt_decode(token).author === "superadmin")
          ? <NavBar navitems={this.navitems} account={this.account()} user={this.User()} product={this.Product()} order={this.Order()}/>
          : <NavBar navitems={this.navitemlower} account={this.account()} />
        }
          <div className='container' style={{width:"80%"}} shopcart={null}>
            <Switch>
              <Route path="/admin" exact component={Orders}/>
              <PrivateRoute path="/admin/chart" component={Chart} />
              <PrivateRoute path="/admin/orderdetail/:id" component={OrderDetail} />
              <PrivateRoute path="/admin/adduser" component={Adding}/>
              <PrivateRoute path="/admin/user" component={ManageUser}/>
              <PrivateRoute path="/admin/updateuser/:id" component={UpdateUser}/>
              <PrivateRoute path='/admin/product' component={ManageProduct}/>
              <PrivateRoute path='/admin/addproduct' component={AddingProduct} />               
              <PrivateRoute path='/admin/updateproduct/:id' component={UpdateProduct} />
              <PrivateRoute path='/admin/customer' component={CustomerManager}/>
              <Route path="/admin/orders" component={Orders}/>
            </Switch>
          </div>
      </div>
    </Router>
  );
  }
}

export default AdminIndex;
