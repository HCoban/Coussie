import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.handleUserButton = this.handleUserButton.bind(this);
  }

  handleUserButton () {

    if (this.props.currentUser) {
      return (
        <div className="user-button">
          <img src="http://res.cloudinary.com/dguiepgvw/image/upload/c_crop,h_700,y_0/v1472687944/noun_138589_cc_rsfmug.png" className="user-button-icon"></img>
        </div>
      );
    } else {
      return (
        <div className="user-button-logged-out">
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="logo-container">
          <img className="logo" src="http://res.cloudinary.com/dguiepgvw/image/upload/v1472689058/1_Primary_logo_on_transparent_258x75_lv51pq.png"></img>
        </div>
        <div>{this.handleUserButton()}</div>
      </div>
    );
  }
}

export default Navbar;
