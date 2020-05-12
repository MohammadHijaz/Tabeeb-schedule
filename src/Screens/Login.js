import React, { Component } from 'react'
import "../css/Login.css";
import Doc from "../Images/doc.png";
class Login extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <img src={Doc} alt="doc"/>
        </div>
        
        <h1 className='primary'> Login as</h1>
        <a href="LoginDr">
            <button className="Doc">Doctor</button>
        </a>
        <br/><br/>
        <a href="LoginHl">
            <button className="Doc">Hospital</button>
        </a>
        <h3 className="text" > Don't have an account?</h3>
        <a href="SignUp">
            <button className="button">Click me!</button>
        </a>
      </div>
    );
  }
}

export default Login;