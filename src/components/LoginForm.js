import React, { Component } from "react";
import { VERIFY_USER } from "../Events";
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      error: "",
    };
  }

  setUser = ({ user, isUser }) => {
    if (isUser) {
      this.setError("User name taken");
    } else {
      this.props.setUser(user);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { socket } = this.props;
    const { nickname } = this.state;
    socket.emit(VERIFY_USER, nickname, this.setUser);
  };

  handleChange = (event) => {
    this.setState({ nickname: event.target.value });
  };

    setError = (error) => {
      this.setState=({error})
  }  

  render() {
    const { nickname, error } = this.state;
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label htmlFor="nickname">
            <h2>Get a NickName</h2>
          </label>
          <input
            ref={(input) => {
              this.textInput = input;
            }}
            type="text"
            id="nickname"
            value={nickname}
            onChange={this.handleChange}
            placeholder={"My UserName"}
          />
          <div className="error">{error ? error : null}</div>
        </form>
      </div>
    );
  }
}