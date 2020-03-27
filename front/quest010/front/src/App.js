import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} sm={6} alignContent="center">
                  <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                </Grid>
                <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                  <BrowserRouter>
                    <Switch>
                      <Route exact path="/" component={SignIn} />
                      <Route path="/signin" component={SignIn} />
                      <Route path="/signup" component={SignUp} />
                      <Route path="/profile" component={Profile} />
                      {/* <SignUp /> */}
                      {/* <SignIn /> */}
                      {/* <Profile /> */}
                    </Switch>
                  </BrowserRouter>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
