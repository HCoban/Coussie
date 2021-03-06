import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory, withRouter } from 'react-router';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {search: ""};
    this.handleUserButton = this.handleUserButton.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.logout = this.logout.bind(this);
    this.home = this.home.bind(this);
    this.delay = this.delay.bind(this);
    this.delayTimer = 0;
  }

  handleUserButton () {
    if (this.props.currentUser) {
      return (
        <div className="user-button">
          <img src={this.props.currentUser.picture_url} className="user-button-icon"></img>
          <ul className="options">
            <li onClick={this.logout}>Logout</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="user-button logged-out">
          <Link className="user-button-icon logged-out" to="/login">
            <img src={"https://res.cloudinary.com/dguiepgvw/image/upload/v1473400734/whitenoun_310151_cc_wbo2ji.png"}></img>
          </Link>
        </div>
      );
    }
  }

  logout(e) {
    e.preventDefault();
    this.props.logOut();
  }

  setSearch (e) {
    e.preventDefault();
    this.setState({[e.currentTarget.name]: e.currentTarget.value}, this.delay);
  }

  delay() {
    let filter = this.state.search;
    clearTimeout(this.delayTimer);
    this.delayTimer = setTimeout(() => this.filterRestaurants(filter), 300);
  }

  filterRestaurants (filter) {
    this.props.filter({query: filter});
    if (this.props.router.location.pathname !== "/") {
      this.props.router.push("/");
    }
  }

  searchBox () {
    return (
    <div className="search-box">
      Find
      <input type="text" name="search" className="search" placeholder="Pizza, Greek, Oakland" value={this.state.search} onChange={this.setSearch}></input>
    </div>
    );
  }

  home (e) {
    e.preventDefault();
    this.setState({["search"]: ""}, this.filterRestaurants);
  }

  render() {

    return (
      <div className="navbar">
        <div className="logo-container" onClick={this.home}>
          <div className="logo-picture-container">
            <img className="logo" src="https://res.cloudinary.com/dguiepgvw/image/upload/v1473311876/noun_24_white_hycgsg.png"></img>
          </div>
          <h1>Coussie</h1>
        </div>
        {this.searchBox()}
        <div>{this.handleUserButton()}</div>
      </div>
    );
  }
}

export default withRouter(Navbar);
