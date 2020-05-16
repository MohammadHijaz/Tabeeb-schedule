import React, { Component } from "react";
import "../css/SignUpAsDr.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dpic from '../Images/Dpic.png'
import Button from '@material-ui/core/Button';
import TextField from "material-ui/TextField";
export class SignUpAsDr extends Component {
   state = {
    FirstName : "",
    LastName :"",
    Email :"",
    Password : "",
    Specialty : "",
   }
   handlechange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };
  render() {
    return (
      <MuiThemeProvider>
      <div>
        
        <h1 className="Header">Sign up as a doctor</h1>
        <div className="Pdiv">
          <div>
            <img src={Dpic} alt="dpic" />
          </div>
          <div className="InvDiv">
            <div>
            <TextField
              hintText="enter your first name"
              floatingLabelText="first name"
              onChange={this.handlechange("FirstName")}
              defaultValue={this.state.FirstName}
            />
            </div>
            <br />
            <div>
              
              <TextField
                hintText="enter your last name"
                floatingLabelText="last name"
                onChange={this.handlechange("LastName")}
                defaultValue={this.state.LastName}
              />
            </div>
            <br />
            <div>
              
            <TextField
              hintText="enter your official email address"
              floatingLabelText="email"
              onChange={this.handlechange("email")}
              defaultValue={this.state.email}
            />
            </div>
            <br />
            <div>
              
            <TextField
              hintText="enter your password"
              floatingLabelText="password"
              onChange={this.handlechange("password")}
              defaultValue={this.state.password}
            />
            </div>
            <br />
            <div>
              
            <TextField
              hintText="What's your specialty?"
              floatingLabelText="Specialty"
              onChange={this.handlechange("Specialty")}
              defaultValue={this.state.Specialty}
            />
            </div>
            <br />
            <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}>Back to Login page</Button> 
          </div>
        </div>
      </div>
  </MuiThemeProvider>
    );
  }
}
export default SignUpAsDr;
