import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

class AuthForm extends Component {
  createLocalUser(values) {
    this.props.onSubmit(values.email, values.password, this.props.history);
  }

  renderField({ type, placeholder, label, input, meta: { touched, error } }) {
    return (
      <div>
        <label> {label}</label>
        <input {...input} />
        <div className="red-text">{touched && error}</div>
      </div>
    );
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.createLocalUser.bind(this))}>
          <div>
            {
              <Field
                name="email"
                component={this.renderField}
                type="email"
                placeholder="E-mail"
                label="E-mail"
              />
            }
          </div>

          <div>
            {
              <Field
                name="password"
                component={this.renderField}
                type="password"
                label="Password"
              />
            }
          </div>

          <div>
            <button
              className="btn"
              type="submit"
              disabled={pristine || submitting}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="row">
          <div className="col s4 offset-s4">
            <a class="waves-effect waves-light btn social google">
              <i class="fa fa-google" />
              {this.props.auth ? 'Sign In' : 'Sign Up'}
            </a>
          </div>
          <div className="col s4">
            <a className="waves-effect waves-light btn social facebook">
              <i className="fa fa-facebook" />
              {this.props.auth ? 'Sign In' : 'Sign Up'}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'You must insert a value here';
  }
  if (!values.lastName) {
    errors.lastName = 'You must insert a value here';
  }

  if (!values.email) {
    errors.email = 'You must insert a value here';
  }
  return errors;
};
export default reduxForm({
  form: 'signin',
  validate: validate,
})(withRouter(AuthForm));
