import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import { incrementAsync as asyncAction } from '../../common/counter/actions';

export default class Counter extends Component {

  static propTypes = {
    actions: React.PropTypes.shape({
      increment: PropTypes.func.isRequired,
      incrementIfOdd: PropTypes.func.isRequired,
      incrementAsync: PropTypes.func.isRequired,
      decrement: PropTypes.func.isRequired,
    }),
    counter: React.PropTypes.shape({
      counter: PropTypes.number.isRequired,
    }),
  };

  static needs = [
    asyncAction,
  ];

  render() {
    const {
      actions: { increment, incrementIfOdd, incrementAsync, decrement },
      counter: {
        counter
        }
      } = this.props;

    return (
      <p>
        <FormattedMessage
          id="clicked"
          description="Clicked message"
          defaultMessage="Clicked"
        /> : {counter}
        <FormattedMessage id="times"
                          description="Number of times user clicked"
                          defaultMessage="times"
        />
        {' '}
        <button onClick={ increment }>+</button>
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

