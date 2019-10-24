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
import Chart from "./Chart"

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CustomerManager from './Customer-Manager';


class AdminIndex extends React.Component {

  navitems = [
    {linkto: "/admin/user", linkname: "User"},
    {linkto: "/admin/menu", linkname: "Menu"},
    {linkto: "/admin/adduser", linkname: "AddUser"},
    {linkto: "/admin/addproduct", linkname: "AddProduct"},
    {linkto: "/admin/customer", linkname: "Customer"},
    {linkto: "/admin/orders", linkname:"Orders"},
    {linkto: "/admin/chart", linkname:"Chart"}
  ]

  componentDidMount(){
    console.log('mount admin')
  }

  render(){
  return (
    <Router>
      <div >
        <NavBar navitems={this.navitems}/>
          <div className='container' style={{width:"80%"}} shopcart={null}>
            <Switch>
              <Route path="/admin/chart" component={Chart}></Route>
              <Route path="/admin/orderdetail/:id" component={OrderDetail}></Route>
              <Route path="/admin/orders" component={Orders}/>
              <Route path="/admin/logout" />
              <Route path="/admin" exact component={ManageProduct}/>
              <Route path="/admin/adduser" component={Adding}/>
              <Route path="/admin/user" component={ManageUser}/>
              <Route path="/admin/updateuser/:id" component={UpdateUser}/>
              <Route path='/admin/menu' component={ManageProduct}/>
              <Route path='/admin/addproduct' component={AddingProduct} />               
              <Route path='/admin/updateproduct/:id' component={UpdateProduct} />
              <Route path='/admin/customer' component={CustomerManager}/>
            </Switch>
          </div>
      </div>
    </Router>
  );
  }
}

export default AdminIndex;
