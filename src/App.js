import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Code from './Screens/CodesGen';
import Nav from './Screens/Navigationbar';
import LoginDr from './Screens/LogInAsDr';
import LoginHl from './Screens/LoginAsHl';
import SignUpAsDr from './Screens/SignUpAsDr';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import SignUpHl from './Screens/SignUpHl';
import ColorCode from './Screens/ColorCode';
import Htable from './Screens/HTable';
import Form from './Screens/Form';
export default function App() {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/LoginDr" component={LoginDr} />
          <Route path="/LoginHl" component={LoginHl} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SignUpDr" component={SignUpAsDr} />
          <Route path="/SignUpHl" component={SignUpHl} />
          <Route path="/CodeGen" component={Code} />
          <Route path="/ColorCode" component={ColorCode} />
          <Route path="/Htable" component={Htable} />
          <Route path="/Form" component={Form} />

        </Switch>
      </Router>
    </React.Fragment>
  )
}