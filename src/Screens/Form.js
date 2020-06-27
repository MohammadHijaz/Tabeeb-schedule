import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
export class Form extends Component {
    state = {
        Speciality : '',
        Doctor : '',
    }
    handleChange = input => e => {
        this.setState({
          [input]: e.target.value
        });
      };
  render() {

    return (
      <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Form" />
            <div style={{display : 'flex' , justifyContent : 'center', alignItems : 'center' , flexDirection : 'column'}}>
            <TextField
              hintText="Doctor's name"
              floatingLabelText="Doctor's name"
              onChange={this.handleChange("Doctor")}
              defaultValue={this.state.Doctor}
              />

            <br />

            <TextField
              hintText="Speciality"
              floatingLabelText="Speciality"
              onChange={this.handleChange("Speciality")}
              defaultValue={this.state.Speciality}
              />
            <br />
            <div>

              <a href="/colorCode">
                  <RaisedButton
                      label="Default messages"
                      primary={true}
                      />
              </a>
            <br />
            <br />
            <a href="/Htable">
            <RaisedButton
                  label="hospital's schedule"
                  primary={true}
                  />
          </a>
        </div>
      </div>
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default Form;
