import React, { Component } from 'react'
import "./SignUp.css"
class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <h1 className='primary'> Sign Up As</h1>
        <a href="SignUpDr">
            <button className="Doc">Doctor</button> 
        </a>
        <br/><br/>
        <a href="SignUpHl">
            <button className="Doc">Hospital</button>
        </a>
        <br/><br/><br/>
        <a href="/">
            <button className="button">Back to Login page</button>
        </a>
      </div>
    );
  }
}

export default SignUp;