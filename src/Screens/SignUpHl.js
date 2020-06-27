import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import Button from '@material-ui/core/Button';
import styles from 'styled-components';
const Container = styles.div `
  display : flex;
  align-items: center;
  flex-direction : column;
  justify-content: center;
  position : relative;
  height : 45%;
  width : 100%;
  padding : 10px;
}
`
export class SignUpHl extends Component {
    state = {
        hospitalName : "",
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
    hintText="enter your hospital's name"
    floatingLabelText="Hospital's name"
    onChange={this.handlechange("hospitalName")}
    defaultValue={this.state.hospitalName}
    />
    <br />
    <TextField
    hintText="enter your official email address"
    floatingLabelText="email"
    onChange={this.handlechange("email")}
    defaultValue={this.state.email}
    />
    <br />
    <TextField
    hintText="enter your password"
    floatingLabelText="password"
    onChange={this.handlechange("password")}
    defaultValue={this.state.password}
    />
    <br />
    <a href="CodeGen">
    <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}  >Join</Button>
    </a>
    </React.Fragment>
    </MuiThemeProvider>
  </Container>
    );
  }
}
export default SignUpHl;