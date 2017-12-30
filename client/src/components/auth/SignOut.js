import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

class SignOut extends Component {
  componentWillMount() {
    this.props.signOutUser(this.props.history);
  }
  render() {
    return <div>Bye</div>;
  }
}

export default connect(null, actions)(withRouter(SignOut));
