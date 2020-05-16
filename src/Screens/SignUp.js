import React, { Component } from 'react'
import "../css/SignUp.css"
import Button from '@material-ui/core/Button';
import Doc from "../Images/doc.png";
class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <img src={Doc} alt="doc" />
        </div>
        <h1 style= {{color:'#bbded6'}}> Sign Up As</h1>
        <br/>
        <a href="SignUpDr">
          <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}>Doctor</Button>  
        </a>
        <br/><br/>
        <a href="SignUpHl">
          <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}>Hospital</Button> 
        </a>
        <br/><br/><br/>
        <div style= {{position:'absolute', left:0 ,top: 500}}>
        <a href="/">
          <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}>Back to Login page</Button> 
        </a>
        </div>
      </div>
    );
  }
}

export default SignUp;