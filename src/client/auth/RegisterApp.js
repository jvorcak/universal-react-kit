import React, { Component } from 'react';

import { RegisterFormWrapper } from './RegisterComponent';

export default class RegisterApp extends Component {

  render() {
    return (
      <div>
        <h1>Register</h1>
        <RegisterFormWrapper actions={this.props.actions}/>
      </div>
    );
  }
}
