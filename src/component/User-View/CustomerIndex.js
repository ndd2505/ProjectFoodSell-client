import React from 'react';
import NavBar from '../NavBar';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch,Redirect , Route} from 'react-router-dom';
import ProductShow from '../User-View/ProductShow';
import About from '../About';
import LogIn from './Login';
import SignUp from './SignUp';
import CartPage from "./CartPage"
import OrderCusView from './OrderCusView';
import OrderDetailCus from './OrderDetailCus';
import CusInfo from './CusInfo';
import PasswordChange from './PasswordChange';
import LoginChangePass from "./ChangePass/ChangePassLogin"

const token = sessionStorage.getItem("keytoken")
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
        sessionStorage.clear()
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
                    <Link to="/home/changepassword" className="dropdown-item">Change Password</Link>
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
                            <PrivateRoute path="/home/forgot" component={PasswordChange}/>
                            <PrivateRoute path="/home/login" component={LogIn}/>
                            <PrivateRoute path="/home/signup" component={SignUp}/>
                            <PrivateRoute2 path="/home/changepassword" component={LoginChangePass} />
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
            
            <div className="footer">
            <div className="row" style={{height:"10vw", }}>
              <div className="col-md-6 col-6" style={{padding:"2vw"}}>
                <p style={{margin:"0px", textAlign:"left"}}>1999-2019 © FoodWeb. All rights reserved</p>
                <p style={{margin:"0px", textAlign:"left"}}>Công ty TNHH FoodWeb</p>
                <p style={{margin:"0px", textAlign:"left"}}>xx Đường xx, Phường xx, Quận xx, TP.Hồ Chí Minh</p>
              </div>
              <div className="col-md-3 col-3" style={{padding:"2vw", fontSize:"1.2vw"}}>
                <a style={{color:"white"}} href="http://localhost:3000/home/about">About Us</a>
                <br/>
                <a style={{color:"white"}} href="https://vnexpress.net/">Read Some News</a>
                <br/>
                <a style={{color:"white"}} href="https://edition.cnn.com/travel/article/world-best-foods-readers-choice/index.html">Some Best Restaurant</a>
              </div>
              <div className="col-md-3 col-3" style={{padding:"2vw", fontSize:"1.2vw"}}>
                Payment:
                <br/>
                <img src="../../image/newcash.png" style={{width:"4vw", height:"3vw", verticalAlign:"0px"}} alt="cashpaylogo"/>
                <img src="../../image/visa.jpg" style={{width:"4vw", height:"3vw", verticalAlign:"0px"}} alt="visapaylogo"/>
                <img src="../../image/paypal.jpg" style={{width:"4vw", height:"3vw", verticalAlign:"0px"}} alt="masterpaylogo"/>
                <img src="../../image/master.jpg" style={{width:"4vw", height:"3vw", verticalAlign:"0px"}} alt="paypallogo"/>
              </div>
            </div>
          </div>
          </Router>
        )
    }
}

export default CustomerIndex