import React from 'react';
import { Link, hashHistory } from 'react-router';

class AuthForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.setInput = this.setInput.bind(this);
    this.submit = this.submit.bind(this);
    this.loginOrSignup = this.loginOrSignup.bind(this);
    this.secondIndex = this.secondIndex.bind(this);
  }

  loginOrSignup () {
    if (this.props.formType === 'login') {
      return "Login";
    } else {
      return 'Sign Up';
    }
  }

  setInput (e) {
    e.preventDefault();
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  submit (e) {
    e.preventDefault();
    let user;
    if (e.currentTarget.className.includes("guest")) {
      user = {username: "user", password: "password"};
    } else {
      user = this.state;
    }
    this.props.processForm({user});
  }

  secondIndex () {
    if (this.props.formType === 'login') {
      return (<div>
        <h3 className ="auth-form-header-info">New to Coussie? <Link to="/signup" className="auth-form-link">Sign up</Link></h3>

      </div>);
    } else {
      return (<div>
        <h3 className ="auth-form-header-info">Already member? <Link to="/login" className="auth-form-link">Log in</Link></h3>

      </div>);
    }

  }

  componentDidUpdate () {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn () {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  render () {
    return (
      <div className="auth-form-container">
        <form className="auth-form-box">
          <h2 className="auth-form-header">Welcome to Coussie</h2>
          {this.secondIndex()}
          <link></link>
          <input type="text" name="username" className="auth-input" placeholder="username" value={this.state.username} onChange={this.setInput} />
          <input type="password" name="password" className="auth-input" placeholder="password" value={this.state.password} onChange={this.setInput} />
          <div className="auth-buttons">
            <button className="auth-button" onClick={this.submit}>{this.loginOrSignup()}</button>
            <button className="auth-button guest" onClick={this.submit}>Guest Login</button>
          </div>
        </form>
        <div className="logo-container">
          <img className="logo" src="http://res.cloudinary.com/dguiepgvw/image/upload/v1472670280/ccphoto-1466978913421-dad2ebd01d17_zf09i2.jpg"></img>
        </div>
      </div>
    );
  }
}

export default AuthForm;
