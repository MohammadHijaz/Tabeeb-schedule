import React, { Component } from 'react'
import "../css/SignUp.css"
import Button from '../Components/Button';
class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <h1 className='primary'> Sign Up As</h1>
        <br/>
        <a href="SignUpDr">
            <Button className="Doc" text="Doctor"/> 
        </a>
        <br/><br/>
        <a href="SignUpHl">
        <Button className="Doc" text="Hospital"/>
        </a>
        <br/><br/><br/>
        <a href="/">
            <Button className="button" text="Back to Login page"/>
        </a>
      </div>
    );
  }
}

export default SignUp;