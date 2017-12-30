import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class Oauth extends Component {
  componentDidMount() {
    this.props.oAuthUser(window.location.search, this.props.history);
  }
  render() {
    return <div>Google oAuth</div>;
  }
}

export default connect(null, actions)(withRouter(Oauth));
