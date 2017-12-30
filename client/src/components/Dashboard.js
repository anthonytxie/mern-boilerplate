import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  renderUserDashboard() {
    if (this.props.auth) {
      return <div>Welcome to the Dashboard </div>;
    }
    return <div />;
  }

  render() {
    return <div>{this.renderUserDashboard()}</div>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Dashboard);
