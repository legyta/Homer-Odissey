import React, { Component } from "react";

class SignUp extends Component {
  state = {
    name: "James",
    lastname: "Bond",
    password: "monPassw0rd",
    email: "mon@email.com",
    userInput: "test@test.com"
  };

  updateFirstnameField = e => {
    this.setState({ name: e.target.value });
  };

  updateLastnameField = e => {
    this.setState({ lastname: e.target.value });
  };

  updatePwField = e => {
    this.setState({ pw: e.target.value });
  };

  updatePwConfField = e => {
    this.setState({ pwconf: e.target.value });
  };

  updateEmailField = event => {
    const email = event.target.value;
    this.setState({ userInput: email });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  };

  render() {
    return (
      <div className="form-email">
        <h1>{JSON.stringify(this.state, 1, 1)} </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="enter your name"
            onChange={this.updateFirstnameField}
          />
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            placeholder="enter your surname"
            onChange={this.updateLastnameField}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={this.updatePwField}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="password-conf"
            placeholder="confirm your password"
            onChange={this.updatePwConfField}
          />
          <label htmlFor="email">enter email here</label>
          <input
            type="email"
            name="email"
            className="signup-email"
            value={this.state.userInput}
            onChange={this.updateEmailField}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
