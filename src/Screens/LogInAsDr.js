import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import styles from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
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
          
          <TextField
            inputProps={{ style: { color: 'white'}}}
            hintText="enter your name"
            floatingLabelText="first name"
            onChange={this.handlechange("firstName")}
            defaultValue={this.state.firstName}
          />
          <br />
          
          <TextField
            inputProps={{ style: { color: 'white'}}}
            hintText="enter your email"
            floatingLabelText="email"
            onChange={this.handlechange("email")}
            defaultValue={this.state.email}
          />
          <br />
          <TextField
            inputProps={{ style: { color: 'white'}}}
            hintText="enter your password"
            floatingLabelText="password"
            type="password"
            onChange={this.handlechange("password")}
            defaultValue={this.state.password}
          />
          <br />
          <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}  >Log In</Button>
        </React.Fragment>
      </MuiThemeProvider>
    </Container>
    );
  }
}
export default LoginAsDr;