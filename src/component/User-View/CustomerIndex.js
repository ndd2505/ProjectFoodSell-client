import React from 'react';
import NavBar from '../NavBar';

import {BrowserRouter as Router, Switch,Redirect , Route} from 'react-router-dom';
import ProductShow from '../User-View/ProductShow';
import About from '../About';
import SideBar from '../ReUseAble/SideBar';
import LogIn from './Login';
import SignUp from './SignUp';
import ForgotPass from './forgotpass';

const memberAuth = false
const PrivateRoute = ({component: Component, ...rest }) =>(
  <Route {...rest} render={(props) =>(
    memberAuth === false
    ? <Component {...props} />
    : <Redirect to='/home' />
  )} />
)

class CustomerIndex extends React.Component{
    navitems = memberAuth === false 
    ? [
        {linkto: "/home", linkname:"Home"},
        {linkto: "/home/about", linkname: "About"},
        {linkto: "/home/login", linkname: "Sign In"},
        {linkto: "/home/signup", linkname: "Sign Up"}
    ] 
    : [
        {linkto: "/home", linkname:"Home"},
        {linkto: "/home/about", linkname: "About"},
        {linkto: "/home", linkname:"Account"}
    ]

    render(){
        return(
            <Router>
            <div>
                <NavBar navitems={this.navitems}/>
                <div className='row'>
                    <div className='col-2'>
                        <SideBar />
                    </div>
                    <div className='col-8'>
            
                <Switch>
                    <Route path='/' exact component={ProductShow}/>
                    <Route path="/home" exact component={ProductShow}/>
                    <Route path="/home/about" component={About}/> 
                    <PrivateRoute path="/home/login" component={LogIn}/>
                    <PrivateRoute path="/home/signup" component={SignUp}/>
                    <PrivateRoute path="/home/forgot" component={ForgotPass} />                           
                </Switch>
            
            </div>
                    <div className='col-2'>
                        <h1>AdHere</h1>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}

export default CustomerIndex