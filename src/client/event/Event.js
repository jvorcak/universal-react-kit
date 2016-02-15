import React, { Component, PropTypes } from 'react';

export default class Event extends Component {

  static propTypes = {
    actions: React.PropTypes.shape({
      incrementEvent: PropTypes.func.isRequired,
      decrementEvent: PropTypes.func.isRequired,
    }),
  };

  render() {
    const { actions: { incrementEvent, decrementEvent } } = this.props;

    return (
      <p>
        Event component
        {' '}
        <button onClick={incrementEvent}>+</button>
        {' '}
        <button onClick={decrementEvent}>-</button>
      </p>
    );
  }
}
