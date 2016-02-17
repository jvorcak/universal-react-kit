import React, { Component } from 'react';

import { LoginFormWrapper } from './LoginComponent';

export default class LoginApp extends Component {

  render() {
    const { auth: loggedIn } = this.props;

    return (
      <div>
        <h1>Login</h1>
        <LoginFormWrapper actions={this.props.actions}/>
      </div>
    );
  }
}
