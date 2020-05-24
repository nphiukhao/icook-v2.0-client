import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import TokenService from "../../services/TokenService";
import RecipeContext from "../../context/RecipeContext";
import "./login-form.css";

export default class LoginForm extends Component {
  state = {
    loginError: "",
    register: false,
    regError: "",
    regMessage: "",
  };
  static contextType = RecipeContext;
  successRegister = () => {
    this.setState({
      regError: "",
      regMessage:
        "Registration complete! Please login with your new Username and Password.",
    });
  };
  successLogin = () => {
    this.setState({
      loginError: "",
      regMessage: "",
    });
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
    this.context.setLogin(true);
  };

  setRegister = () => {
    this.setState({
      register: true,
    });
  };
  handleRegister = (e) => {
    e.preventDefault();
    const { user_name, password } = e.target;
    AuthService.registerUser({
      user_name: user_name.value,
      password: password.value,
    }).then((res) => {
      if (!res.ok) {
        res.json().then((resp) => this.setState({ regError: resp.error }));
      } else {
        user_name.value = "";
        password.value = "";

        this.successRegister();
      }
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    const { user_name, password } = e.target;
    AuthService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.successLogin();
      })
      .catch((err) => this.setState({ loginError: err.error }));
  };

  render() {
    let renderError;
    if (this.state.loginError) {
      renderError = <p className="error">{this.state.loginError}</p>;
    }
    let renderRegError;
    if (this.state.regError) {
      renderRegError = <p className="error">{this.state.regError}</p>;
    }
    let renderRegMessage;
    if (this.state.regMessage) {
      renderRegMessage = <p className="reg-message">{this.state.regMessage}</p>;
    }
    let renderRegister;
    if (this.state.register) {
      renderRegister = (
        <div className="register-container">
          <p>register here!</p>
          <p className="instructions">enter a username and password</p>
          <form onSubmit={this.handleRegister}>
            <input
              id="user_name"
              name="user_name"
              required
              placeholder="Username"
            ></input>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
            ></input>
            {renderRegError}
            {renderRegMessage}
            <button type="submit">register</button>
          </form>
        </div>
      );
    }
    return (
      <div className="forms-container">
        <div className="login-container">
          <p>login</p>
          <div className="instructions">
            <p>demo username: Iam</p>
            <p>demo password: Legit</p>
          </div>
          <form onSubmit={this.handleLogin}>
            <input
              id="user_name"
              name="user_name"
              required
              placeholder="Username"
            ></input>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
            ></input>
            {renderError}
            <button type="submit">login</button>
          </form>
          <p className="or">or</p>
          <button onClick={() => this.setRegister()}> register now</button>
        </div>
        {renderRegister}
      </div>
    );
  }
}
