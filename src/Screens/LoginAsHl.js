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
  height : 45%;
  width : 100%;
  padding : 10px;
}
`
export class FormUserDetails extends Component {
    state = {
        hospitalCode : "",
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
          <AppBar title="Log In As A Hospital" />
          <TextField
            hintText="enter your hospital's code"
            floatingLabelText="hospital's code"
            onChange={this.handlechange("hospitalCode")}
            defaultValue={this.state.hospitalCode}
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
            onClick={() => {
              
            }}
          />
        </React.Fragment>
      </MuiThemeProvider>
    </Container>
    );
  }
}
export default FormUserDetails;