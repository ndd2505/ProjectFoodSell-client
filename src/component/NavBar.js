import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  navliststyle = {
    color: 'black',
  }
  render(){
  return (
    <div >
    <nav className='navbar'>
      <Link to="/">
      <img className='logo' src='https://cdn.iconscout.com/icon/free/png-256/food-809-675214.png' alt='logofood'/>
      </Link>
      <ul className='nav-links'>
        {this.props.navitems.map(navitem => 
        <Link key={navitem.linkname} style={this.navliststyle} to={navitem.linkto}><li>{navitem.linkname}</li></Link>
          )}
      </ul>
    </nav>
    </div>
  );
  }
}

export default NavBar;