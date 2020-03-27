import React, { Component } from "react";
import { Button, TextField, Snackbar } from "@material-ui/core";
import "../components/signup.css";

const vertical = "bottom";
const horizontal = "center";

class SignUp extends Component {
  state = {
    email: "mon@email.com",
    password: "monPassw0rd",
    name: "James",
    lastname: "Bond",
    flash: "",
    open: false
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
    this.setState({ open: false });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="signup">
        {/* <h1>{JSON.stringify(this.state, 1, 1)} </h1> */}
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h1>Sign up here!</h1>
          <label htmlFor="email">enter email here</label>
          <TextField
            type="email"
            name="email"
            className="signup-email"
            value={this.state.userInput}
            onChange={this.updateEmailField}
          />

          <label htmlFor="password">Password</label>
          <TextField
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={this.updatePwField}
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="enter your name"
            onChange={this.updateFirstnameField}
          />
          <label htmlFor="lastname">Lastname</label>
          <TextField
            type="text"
            name="lastname"
            placeholder="enter your surname"
            onChange={this.updateLastnameField}
          />

          {/* <label htmlFor="confirmPassword">Confirm Password</label>
          <TextField
            type="password"
            name="password-conf"
            placeholder="confirm your password"
            onChange={this.updatePwConfField}
          /> */}

          <Button
            className="signup-button"
            value="submit"
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            {" "}
            Submit{" "}
          </Button>

          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={this.state.open}
            onClose={this.handleClose}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">{this.state.flash}</span>}
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
