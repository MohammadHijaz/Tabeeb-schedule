import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styles from 'styled-components';
const Container = styles.div `
  display : flex;
  align-items: center;
  flex-direction : column;
  justify-content: center;
  position : absolute;
  height : 60%;
  width : 100%;
  padding : 10px;
}
`
export class LoginAsDr extends Component {
  state = {
    firstName : "",
    email : "",
    password : "",
  }
  handlechange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    return (
    <Container>
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Log In As A Dr" />
          <TextField
            hintText="enter your name"
            floatingLabelText="first name"
            onChange={this.handlechange("firstName")}
            defaultValue={this.state.firstName}
          />
          <br />
          <TextField
            hintText="enter your email"
            floatingLabelText="email"
            onChange={this.handlechange("email")}
            defaultValue={this.state.email}
          />
          <br />
          <TextField
            hintText="enter your password"
            floatingLabelText="password"
            type="password"
            onChange={this.handlechange("password")}
            defaultValue={this.state.password}
          />
          <br />
          <RaisedButton
            label="next"
            primary={true}
            style={{margin : 15}}
          />
        </React.Fragment>
      </MuiThemeProvider>
    </Container>
    );
  }
}
export default LoginAsDr;