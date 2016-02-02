import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import {incrementAsync} from '../../common/counter/actions';

export default class Counter extends Component {

  //static propTypes = {
  //  increment: PropTypes.func.isRequired,
  //  incrementIfOdd: PropTypes.func.isRequired,
  //  incrementAsync: PropTypes.func.isRequired,
  //  decrement: PropTypes.func.isRequired,
  //  counter: PropTypes.number.isRequired
  //};

  static needs = [
    incrementAsync
  ];

  render() {
    const {
      actions: {increment, incrementIfOdd, incrementAsync, decrement},
      counter: {
        counter
        } } = this.props;

    return (
      <p>
        <FormattedMessage
          id="clicked"
          description="Clicked message"
          defaultMessage="Clicked"
        />: {counter} times!
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    )
  }

}

