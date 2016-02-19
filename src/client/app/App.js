import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import DevTools from '../devTools';
import * as counterActions from '../../common/counter/actions';
import * as eventActions from '../../common/event/actions';
import * as authActions from '../../common/auth/actions';
import RouterHandler from '../../common/components/RouterHandler';

import styles from './app.scss';

function mapStateToProps(state) {
  return {
    ...state,
  };
}

const actions = [
  counterActions,
  eventActions,
  authActions,
];

function mapDispatchToProps(dispatch) {
  const creators = new Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
  };
}

class App extends Component {

  componentWillMount() {
    const { actions: { checkAuth } } = this.props;
    checkAuth();
  }

  render() {
    // to demonstrate webpack-isomorphic-tools
    const imagePath = require('./react-logo.png');

    const { auth, actions: {logOut} }  = this.props;

    const avatarURL = auth.getIn(["loggedIn", "password", "profileImageURL"]);

    return (<div className={styles.app}>
      <header>
        <h1>universal-react-kit</h1>
        <img src={imagePath}/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/event">Event</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><a href="#" onClick={e => logOut(e)}>Log out</a></li>
        </ul>
        <img src={avatarURL}/>
      </header>
      <RouterHandler {...this.props}/>
      <DevTools/>
    </div>);
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
