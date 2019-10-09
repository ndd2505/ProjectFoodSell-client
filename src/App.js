import React from 'react';
import './App.css';
import CustomerIndex from './component/User-View/CustomerIndex';
import AdminIndex from './component/Admin-View/AdminIndex';


import {BrowserRouter as Router,Redirect ,Switch, Route} from 'react-router-dom';
const adminAuth = 1
const PrivateRoute = ({component: Component, ...rest }) =>(
  <Route {...rest} render={(props) =>(
    (adminAuth)
    ? <Component {...props} />
    : <Redirect to='/home' />
  )} />
)


class App extends React.Component {
  componentDidMount(){
    this.setState()
    console.log('mounted app')
  }
  render(){
  return (
    <Router>
      <img className="HeaderImg" src="https://eatpolska.com/wp-content/uploads/2017/10/new_fdt_header.jpg"alt='night-food' />
      <Switch>
        <Route path="/" exact component={CustomerIndex} />
        <Route path="/home" component={CustomerIndex}/>
        <PrivateRoute path="/admin" component={AdminIndex}/>
      </Switch>
    </Router>
  );
  }
}

export default App;
