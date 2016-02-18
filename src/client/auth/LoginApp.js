import React, { Component } from 'react';

import { LoginFormWrapper } from './LoginComponent';

class LoginApp extends Component {

  componentWillMount() {
    this.context.router.push('/register');
  }

  render() {
    const { auth: loggedIn } = this.props;

    return (
      <div>
        <h1>Login</h1>
        <LoginFormWrapper actions={this.props.actions}/>
        <button onClick={e=>this.redirect(e)}>Redirect</button>
      </div>
    );
  }
}

LoginApp.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LoginApp;
