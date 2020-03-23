import React, { Component } from "react";

class SignUp extends Component {
  state = {
    userInput: "test@test.com"
  };

  updateEmailField = event => {
    const email = event.target.value;
    this.setState({ userInput: email });
  };

  render() {
    return (
      <div className="form-email">
        <h1>{this.state.userInput} </h1>
        <label htmlFor="exampleEmail">enter email here</label>
        <input
          type="email"
          name="email"
          className="form-emailPlace"
          value={this.state.userInput}
          onChange={this.updateEmailField}
        />
      </div>
    );
  }
}

export default SignUp;
