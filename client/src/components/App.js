import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';
import Header from './Header';
import Dashboard from './Dashboard';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';
import Oauth from './auth/OAuth';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signout" component={SignOut} />
            <Route exact path="/oauth" component={Oauth} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
