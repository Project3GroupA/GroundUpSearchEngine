import React from 'react';
import Navigation from './components/Navigation';
import UserSignUpPage from './pages/UserSignUpPage';
import UserLoginPage from './pages/UserLoginPage';
import HomePage from './pages/HomePage';
import IndexPage from './pages/IndexPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom';

import './App.css';



class App extends React.Component {
  render(){
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/userlogin" component={UserLoginPage}/>
        <Route path="/usersignup" component={UserSignUpPage} />
        <Route path="/index" component={IndexPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
    
    
  )}
}

export default App;
