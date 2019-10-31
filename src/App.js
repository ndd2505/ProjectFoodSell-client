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
      <div className="footer" >
        <div className="row" style={{height:"10vw"}}>
          <div className="col-md-6 col-6" style={{padding:"2vw"}}>
            <p style={{margin:"0px", textAlign:"center"}}>1999-2019 © FoodWeb. All rights reserved</p>
          </div>
          <div className="col-md-3 col-3" style={{padding:"2vw", fontSize:"1.2vw"}}>
            <ul style={{listStyle:"none"}}>
              <li>Nhanh</li>
              <li>Tien</li>
              <li>Da dang</li>
            </ul>
          </div>
          <div className="col-md-3 col-3" style={{padding:"2vw"}}>
            <img src="https://www.sketchappsources.com/resources/source-image/credit-card-logos.png" style={{width:"7vw", verticalAlign:"0px"}} alt="afafd"/>
          </div>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
