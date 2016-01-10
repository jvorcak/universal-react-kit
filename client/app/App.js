import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Counter from '../counter/Counter';
import DevTools from '../devTools';
import * as counterActions from '../../common/counter/actions';
import * as eventActions from '../../common/event/actions';
import RouterHandler from '../../common/components/RouterHandler';

function mapStateToProps(state) {
  return {
    ...state
  }
}

const actions = [
  eventActions,
  counterActions
];

function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch)
  };
}

class App extends Component {

  render() {
    return <div>
      React Home
      <RouterHandler {...this.props}/>
      <DevTools></DevTools>
    </div>;
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
