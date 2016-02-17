import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

const fields = ['email', 'password'];

class RegisterForm extends Component {

  render() {
    const { actions: { register }, fields: { email, password } } = this.props;

    return (
      <div>
        <form>
          <div>
            <label>Email</label>
            <div>
              <input type="text" placeholder="Email" {...email}/>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input type="password" placeholder="Password" {...password}/>
            </div>
          </div>
        </form>
        <button onClick={e => register(email.value, password.value)}>
          Register
        </button>
      </div>
    );
  }
}

const RegisterFormWrapper = reduxForm({
  form: 'simple',
  fields,
})(RegisterForm);

export class RegisterApp extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <RegisterFormWrapper actions={this.props.actions}/>
      </div>
    );
  }
}
