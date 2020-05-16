import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import styles from 'styled-components';
import Button from '@material-ui/core/Button';
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
          <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}  >Log In</Button>
        </React.Fragment>
      </MuiThemeProvider>
    </Container>
    );
  }
}
export default FormUserDetails;