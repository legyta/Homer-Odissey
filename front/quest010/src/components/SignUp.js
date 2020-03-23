import React, { Component } from "react";

class SignUp extends Component {
  state = {
    name: "James",
    lastname: "Bond",
    password: "monPassw0rd",
    email: "mon@email.com",
    userInput: "test@test.com"
  };

  updateEmailField = event => {
    const email = event.target.value;
    this.setState({ userInput: email });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="form-email">
        <h1>{JSON.stringify(this.state, 1, 1)} </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="firstname" placeholder="enter your name" />
          <label htmlFor="lastname">Lastname</label>
          <input type="text" name="lastname" placeholder="enter your surname" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="password-conf"
            placeholder="confirm your password"
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
