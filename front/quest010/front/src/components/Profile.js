import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import "../components/signup.css";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";

const horizontal = "center";

class Profile extends Component {
  state = {
    profile: {
      email: "homer.simpson@wildcodeschool.fr",
      name: "Homer",
      lastname: "Simpson"
    }
  };

  render() {
    return (
      <div className="signup">
        <Link to="/profile"></Link>

        <form className="signup-form">
          <h1>Here's your profile!</h1>

          <List>
            <ListItem>
              <ListItemText
                primary="E-mail"
                secondary={this.state.profile.email}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Name"
                secondary={this.state.profile.name}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Last name"
                secondary={this.state.profile.lastname}
              />
            </ListItem>
          </List>

          <Button
            className="signup-button"
            value="submit"
            variant="contained"
            color="primary"
          >
            {" "}
            <Link to="/signin"> Sign Out </Link>
          </Button>
        </form>
      </div>
    );
  }
}

export default Profile;
