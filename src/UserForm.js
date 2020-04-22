import React, { Component } from "react";
import LoginAsDr from './Screens/LogInAsDr';
export default class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        city: "",
        bio: ""
      };
      nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };
      PreviousStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };
      handlechange = input => e => {
        this.setState({
          [input]: e.target.value
        });
      };
  render() {
    const { step } = this.state;
    const { firstName, lastName, city, bio, email, occupation } = this.state;
    const values = { firstName, lastName, city, bio, email, occupation };
    return (
     <LoginAsDr
            nextStep={this.nextStep}
            handlechange={this.handlechange}
            values={values}
    />
    );
  }
}
