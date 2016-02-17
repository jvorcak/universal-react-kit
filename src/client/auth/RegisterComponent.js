import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

const fields = ['email', 'password'];

class RegisterForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const { actions: { register }, fields: { email, password } } = this.props;
    register(email.value, password.value);
  }

  render() {
    const { fields: { email, password } } = this.props;

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export const RegisterFormWrapper = reduxForm({
  form: 'registration',
  fields,
})(RegisterForm);
