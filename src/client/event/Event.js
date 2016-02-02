import React, { Component, PropTypes } from 'react';

export default class Event extends Component {

  //static propTypes = {
  //  increment: PropTypes.func.isRequired,
  //  incrementIfOdd: PropTypes.func.isRequired,
  //  incrementAsync: PropTypes.func.isRequired,
  //  decrement: PropTypes.func.isRequired,
  //  counter: PropTypes.number.isRequired
  //};

  render() {
    const {
      actions,
      actions: {incrementEvent, decrementEvent},
      counter: {
        counter
        } } = this.props;

    return (
      <p>
        Event component
        {' '}
        <button onClick={incrementEvent}>+</button>
        {' '}
        <button onClick={decrementEvent}>-</button>
      </p>
    )
  }
}
