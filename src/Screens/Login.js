import React, { Component } from 'react'
import Doc from "../Images/doc.png";
import Button from '@material-ui/core/Button';

class Login extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <img src={Doc} alt="doc" />
        </div>
        <h1 style= {{color:'#bbded6'}}> Login as</h1>
        <a href="LoginDr">
          <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}>Doctor</Button>
        </a>
        <br /><br />
        <a href="LoginHl">
          <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}>Hospital</Button>
          
        </a>
        <div style= {{position:'absolute', left:0 ,top: 450}}> 
          <h3 style= {{color:'#bbded6'}} > Don't have an account?</h3>
          <a href="SignUp">
          <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}  >Click me!</Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Login;