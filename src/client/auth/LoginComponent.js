import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

const fields = ['email', 'password'];

class LoginForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const { actions: { login }, fields: { email, password } } = this.props;
    login(email.value, password.value);
  }

  render() {
    const { actions: {
      loginWithFacebook,
      loginWithTwitter,
      }, fields: { email, password } } = this.props;

    return (
      <div>
        <button onClick={loginWithFacebook}>Facebook login</button>
        <button onClick={loginWithTwitter}>Twitter login</button>
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

export const LoginFormWrapper = reduxForm({
  form: 'login',
  fields,
})(LoginForm);
