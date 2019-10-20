import React from 'react';
import '../../App.css';
import ManageUser from './Manage-User';
import NavBar from '../NavBar';
import Adding from '../Modify Data/Adding-User';
import UpdateUser from '../Modify Data/Update-User';
import ManageProduct from './Manage-Product';
import AddingProduct from '../Modify Data/Adding-Product';
import UpdateProduct from '../Modify Data/Update-Product';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CustomerManager from './Customer-Manager';


class AdminIndex extends React.Component {

  navitems = [
    {linkto: "/admin/user", linkname: "User"},
    {linkto: "/admin/menu", linkname: "Menu"},
    {linkto: "/admin/adduser", linkname: "AddUser"},
    {linkto: "/admin/addproduct", linkname: "AddProduct"},
    {linkto: "/admin/customer", linkname: "Customer"}
  ]

  componentDidMount(){
    console.log('mount admin')
  }

  render(){
  return (
    <Router>
      <div >
        <NavBar navitems={this.navitems}/>
        <div className='row'>
          <div className='col-3 col-md-2 col-lg-2 col-sm-3 col-xs-3'>
            <h1>SideBar</h1>
          </div>
          <div className='col-6 col-md-8 col-ls-8 col-sm-6 col-xs-6'>
            <Switch>
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
          <div className='col-3 col-md-2 col-lg-2 col-sm-3 col-xs-3'>
            <h1>Ad</h1>
          </div>
        </div>
      </div>
    </Router>
  );
  }
}

export default AdminIndex;
