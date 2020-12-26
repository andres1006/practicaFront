import React from 'react';
import {  BrowserRouter as Router,  Switch, Route, Redirect } from "react-router-dom"
import './App.css';
import  ListTests  from './page/listTests';
import  DetailTestPacient  from './page/test';
import  ListLogs  from './page/listLogs';
import  Login from './components/Login';
import  ForgotPassword from './components/forgotPassword';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/reports" render={() => (
          window.sessionStorage.getItem('login') === 'true' ? (
            <ListTests/>
          ) : (
            <Redirect to="/" /> 
          )
        )}/>

        <Route exact path="/detail" render={() => (
          window.sessionStorage.getItem('login') === 'true' ? (
            <DetailTestPacient/>
          ) : (
            <Redirect to="/" /> 
          )
        )}/>

        <Route exact path="/listlogs" render={() => (
          window.sessionStorage.getItem('login') === 'true' ? (
            <ListLogs/>
          ) : (
            <Redirect to="/" /> 
          )
        )}/>

        <Route  exact path="/">
          <Login/>
        </Route>
        <Route  exact path="/forgot-pass">
          <ForgotPassword/>
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
