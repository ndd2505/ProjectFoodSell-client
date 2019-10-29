import React from 'react';
import NavBar from '../NavBar';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch,Redirect , Route} from 'react-router-dom';
import ProductShow from '../User-View/ProductShow';
import About from '../About';
import LogIn from './Login';
import SignUp from './SignUp';
import ForgotPass from './forgotpass';
import CartPage from "./CartPage"
import OrderCusView from './OrderCusView';
import OrderDetailCus from './OrderDetailCus';
import CusInfo from './CusInfo';
const token = localStorage.getItem("keytoken")
const PrivateRoute = ({component: Component, ...rest }) =>(
  <Route {...rest} render={(props) =>(
    token === null
    ? <Component {...props} />
    : <Redirect to='/home' />
  )} />
)
const PrivateRoute2 = ({component: Component, ...rest }) =>(
    <Route {...rest} render={(props) =>(
      token === null
      ? <Redirect to='/home' />
      : <Component {...props} />
    )} />
  )

class CustomerIndex extends React.Component{
    navitems = token === null
    ? [
        {linkto: "/home", linkname:"Home"},
        {linkto: "/home/about", linkname: "About"},
        {linkto: "/home/login", linkname: "Sign In"},
        {linkto: "/home/signup", linkname: "Sign Up"}
    ] 
    : [
        {linkto: "/home", linkname:"Home"},
        {linkto: "/home/about", linkname: "About"}
    ]

    logout= () =>{
        localStorage.clear()
        window.location.replace("http://localhost:3000/home/login")
    }

    account = () =>{
        if(token !== null){
            return (
                <li className="nav-item dropdown active" >
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                    </Link>
                    <div style={{textAlign:"center", backgroundColor:"darkorange"}} className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/home/info">Account Infomation</Link>
                    <Link to="/home/orders" className="dropdown-item">Orders</Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={()=>this.logout()}>Log Out</button>
                    </div>
                </li>
            )
        }
    }

    render(){
        return(
            <Router>
            <div>
                <NavBar navitems={this.navitems} account={this.account()}/>
                <div className='row'>
                    <div className='col-3 col-md-2 col-lg-2 col-sm-3 col-xs-3'>
                    <img onClick={()=>{window.location.replace("http://localhost:3000/home")}} width="20%" className="banner" src="../../../image/banner2.jpg" alt="Ad"/>
                    </div>
                    <div className='col-6 col-md-8 col-ls-8 col-sm-6 col-xs-6' style={{left: "0px"}}>
                        <Switch>
                            <Route path='/' exact component={ProductShow}/>
                            <Route path="/home" exact component={ProductShow}/>
                            <Route path="/home/about" component={About}/> 
                            <PrivateRoute path="/home/login" component={LogIn}/>
                            <PrivateRoute path="/home/signup" component={SignUp}/>
                            <PrivateRoute path="/home/forgot" component={ForgotPass} />
                            <PrivateRoute2 path="/home/orders" component={OrderCusView}/>
                            <PrivateRoute2 path="/home/orderdetail/:id" component={OrderDetailCus}/>
                            <PrivateRoute2 path="/home/info" component={CusInfo}/>
                            <Route path="/home/cart" component={CartPage}/>                           
                        </Switch>
                    </div>
                    <div className='col-3 col-md-2 col-lg-2 col-sm-3 col-xs-3' style={{left:"0px"}}>
                    <img onClick={()=>{window.location.replace("http://localhost:3000/home")}} width="20%" className="banner" src="../../../image/banner.jpg" alt="Ad"/>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}

export default CustomerIndex