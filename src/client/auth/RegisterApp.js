import React, { Component } from 'react';

import { RegisterFormWrapper } from './RegisterComponent';

export default class RegisterApp extends Component {

  render() {
    const { auth: loggedIn } = this.props;

    return (
      <div>
        <h1>Register {loggedIn}</h1>
        <RegisterFormWrapper actions={this.props.actions}/>
      </div>
    );
  }
}
