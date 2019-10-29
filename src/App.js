import React from 'react';
import './App.css';
import CustomerIndex from './component/User-View/CustomerIndex';
import AdminIndex from './component/Admin-View/AdminIndex';
import jwt_decode from 'jwt-decode';


import {BrowserRouter as Router,Redirect ,Switch, Route} from 'react-router-dom';
const adminAuth = localStorage.getItem("keytoken")
const PrivateRoute = ({component: Component, ...rest }) =>(
  <Route {...rest} render={(props) =>(
    (adminAuth !== null)
    ? (jwt_decode(adminAuth).role === "admin") ? <Component {...props} /> : <Redirect to='/home/login' />
    : <Redirect to='/home/login' />
  )} />
)
const PublicRoute = ({component: Component, ...rest }) =>(
  <Route {...rest} render={(props) =>(
    (adminAuth !== null)
    ? (jwt_decode(adminAuth).role !== "admin") ? <Component {...props} /> : <Redirect to='/admin' />
    : <Component {...props} />
  )} />
)


class App extends React.Component {
  componentDidMount(){
    this.setState()
  }
  render(){
  return (
    <Router>
      <img className="HeaderImg" src="https://eatpolska.com/wp-content/uploads/2017/10/new_fdt_header.jpg"alt='night-food' />
      <Switch>
        <PublicRoute path="/" exact component={CustomerIndex} />
        <PublicRoute path="/home" component={CustomerIndex}/>
        <PrivateRoute path="/admin" component={AdminIndex}/>
      </Switch>
    </Router>
  );
  }
}

export default App;
