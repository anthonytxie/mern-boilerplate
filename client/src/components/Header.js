import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderAuthLinks() {
    console.log('THIS IS THE AUTH PROPS ' + this.props.auth);
    switch (this.props.auth) {
      case null:
        return 'still deciding';
      case false:
        return (
          <div>
            <nav>
              <div class="nav-wrapper">
                <a href="#" class="brand-logo">
                  Compete
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li>
                    <a href="/signin">Sign In</a>
                  </li>
                  <li>
                    <a href="/signup">Sign Up</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        );
      default:
        return (
          <div>
            <nav>
              <div class="nav-wrapper">
                <a href="#" class="brand-logo">
                  Compete
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li>
                    <Link to="/signout">Sign Out </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        );
    }
  }

  render() {
    return <div>{this.renderAuthLinks()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, null)(Header);
