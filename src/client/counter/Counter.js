import React, { Component, PropTypes } from 'react';
import { FormattedMessage, defineMessages, injectIntl, intlShape } from 'react-intl';
import Helmet from 'react-helmet';

import { incrementAsync as asyncAction } from '../../common/counter/actions';

const messages = defineMessages({
  counterTitle: {
    id: 'counterTitle',
    defaultMessage: 'Counter title',
  },
});

class Counter extends Component {

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
    intl: intlShape.isRequired,
  };

  static needs = [
    asyncAction,
  ];

  render() {
    const {
      actions: { increment, incrementIfOdd, incrementAsync, decrement },
      counter: {
        counter,
        },
      } = this.props;

    const { formatMessage } = this.props.intl;

    return (
      <p>
        <Helmet title={formatMessage(messages.counterTitle)} />
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
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={incrementAsync}>Increment async</button>
      </p>
    );
  }

}

export default injectIntl(Counter);
