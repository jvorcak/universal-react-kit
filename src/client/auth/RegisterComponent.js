import React, { Component } from 'react';

export class RegisterApp extends Component {

  render() {

    const { actions: { register } } = this.props;

    return (
      <div>
        <h1>Register</h1>
        <div>
          <button onClick={e => register("jan.vorcak@opoint.com", "hello")}>Register</button>
        </div>
      </div>
    );
  }
}
;