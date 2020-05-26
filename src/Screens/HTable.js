import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
function createData(name, place, time, notes) {
  return { name, place, time, notes };
}

export class HTable extends Component {
    constructor() {
        super()
        this.state = {
            rows :[
                createData(
                    <TextField hintText="name" />,
                    <TextField hintText="place" />,
                    <TextField hintText="time" />,
                    <TextField hintText="notes" />
                    ),
                ] 
                    }
                }
    add() {
        this.state.rows.push(
            createData(
                <TextField hintText="name" />,
                <TextField hintText="place" />,
                <TextField hintText="time" />,
                <TextField hintText="notes" />
                )
            );
            this.forceUpdate();
        }                    
    render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Hospital's schedule" style={{marginTop: 30}} />
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>patient name</TableCell>
                  <TableCell>place</TableCell>
                  <TableCell>time</TableCell>
                  <TableCell>notes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.place}</TableCell>
                    <TableCell>{row.time}</TableCell>
                    <TableCell align="center">{row.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <RaisedButton  label="New" primary={true} onClick={() => this.add()} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default HTable;
