import React, { Component } from "react";
import "../css/SignUpAsDr.css";
import Dpic from '../Images/Dpic.png'
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
      <div>
        <h1 className="Header">Sign up as a doctor</h1>
        <hr id="Hr" />
        <div className="Pdiv">
          <div>
            <img src={Dpic} alt="dpic" />
          </div>
          <div className="InvDiv">
            <h3> </h3>
            <div>
              <div className="Lapel">
                <lapel> First name :</lapel>
              </div>

              <input
                className="text"
                type="text"
                placeholder="First name"
                onChange={this.handlechange("FirstName")}
                defaultValue={this.state.FirstName}
              />
            </div>
            <br />
            <div>
              <div className="Lapel">
                <lapel>Last name : </lapel>
              </div>
              <input
                className="text"
                type="text"
                placeholder="Last name"
                onChange={this.handlechange("LastName")}
                defaultValue={this.state.LastName}
              />
            </div>
            <br />
            <div>
              <div className="Lapel">
                <lapel>Email: </lapel>
              </div>
              <input
                className="text"
                type="Email"
                placeholder="Email"
                onChange={this.handlechange("Email")}
                defaultValue={this.state.Email}
              />
            </div>
            <br />
            <div>
              <div className="Lapel">
                <lapel>Password </lapel>
              </div>
              <input
                className="text"
                type="password"
                placeholder="Password"
                onChange={this.handlechange("Password")}
                defaultValue={this.state.Password}
              />
            </div>
            <br />
            <div>
              <div className="Lapel">
                <lapel>Specialty </lapel>
              </div>
              <input
                className="text"
                type="text"
                placeholder="Specialty"
                onChange={this.handlechange("Specialty")}
                defaultValue={this.state.Specialty}
              />
            </div>
            <br />
            <button id="button" primary={true} onClick={this.continue}>
              sign up
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUpAsDr;
