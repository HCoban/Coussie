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
            <img src={"http://res.cloudinary.com/dguiepgvw/image/upload/v1473111262/noun_310151_cc_jyfmyt.png"}></img>
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
    this.setState({[e.currentTarget.name]: e.currentTarget.value}, this.filterRestaurants);
  }

  filterRestaurants () {
    let filter = this.state.search;
    this.props.filter({query: filter});
    this.props.router.push("/");
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
    // this.props.router.push("/");
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
