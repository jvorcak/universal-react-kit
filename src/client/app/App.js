import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import DevTools from '../devTools';
import * as counterActions from '../../common/counter/actions';
import * as eventActions from '../../common/event/actions';
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

  render() {
    // to demonstrate webpack-isomorphic-tools
    const image_path = require('./react-logo.png');

    return (<div className={styles.app}>
      <header>
        <h1>universal-react-kit</h1>

        <img src={image_path}/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/event">Event</Link></li>
        </ul>
      </header>
      <RouterHandler {...this.props}/>
      <DevTools/>
    </div>);
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
