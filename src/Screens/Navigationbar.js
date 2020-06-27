import React,{Component} from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import styles from 'styled-components';
const Container = styles.div`
.navbar {
  background-color : #bbded6;
  padding : 10px
}
.navbar-brand {
  position : realtive;
  color : white;
  .text1 {
    visibility: hidden;
    font-size : 14px;
    width: 120px;
    background-color: #bbded6;
    color: black;
    padding-left: 10px;
    border-radius: 0px;
    top: -5px;
    left: 50;
  
  }
  &:hover .text1 {
    visibility: visible;
  }
  &:hover {
    color : white;
  }
}
 .navbar-nav .nav-link {
  color : white;
  &:hover {
    color : white;
  }
}
.navbar-nav .nav-link.active {
  color : white;
  &:hover {
    color : white; 
  }
}
`
export default class NavBar extends Component  {
  shouldComponentUpdate = false;
  render() {

    return (
      <Container>
      <Navbar expand="lg">
      <Navbar.Brand>Home
      <span class="text1">Welocme to Our Website</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Nav.Link href="/">Login</Nav.Link>
      <Nav.Link href="SignUp">SignUp</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
      </Container> 
      );
    }
  }
    
