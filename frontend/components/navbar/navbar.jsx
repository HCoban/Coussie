import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory, withRouter } from 'react-router';
import Options from './options';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {search: ""};
    this.handleUserButton = this.handleUserButton.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.logout = this.logout.bind(this);
    this.home = this.home.bind(this);
  }

  handleUserButton () {
    if (this.props.currentUser) {
      return (
        <div className="user-button" onClick={this.logout}>
          <img src={this.props.currentUser.picture_url} className="user-button-icon"></img>
          <ul className="options">
            <li>"Option1"</li>
            <li>"Option2"</li>
            <li>"Option3"</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="user-button logged-out">
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }

  logout(e) {
    e.preventDefault();
    this.props.logOut();
    // return (
    //   ReactDOM.render(<Options/>, e.currentTarget)
    // );
  }

  setSearch (e) {
    e.preventDefault();
    this.setState({["search"]: e.currentTarget.value});
  }

  searchBox () {
    return (
    <div className="search-box">
      Find
      <input type="text" className="search" placeholder="burittos, burgers, Greek" value={this.state.search} onChange={this.setSearch}></input>
    </div>
    );
  }

  home () {
    this.props.router.push("/");
  }

  render() {

    return (
      <div className="navbar">
        <div className="logo-container">
          <img onClick={this.home} className="logo" src="http://res.cloudinary.com/dguiepgvw/image/upload/v1472689058/1_Primary_logo_on_transparent_258x75_lv51pq.png"></img>
        </div>
        {this.searchBox()}
        <div>{this.handleUserButton()}</div>
      </div>
    );
  }
}

export default withRouter(Navbar);
