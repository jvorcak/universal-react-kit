import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import {fetchCounter}from '../../common/counter/api';

export default class Counter extends Component {

  //static propTypes = {
  //  increment: PropTypes.func.isRequired,
  //  incrementIfOdd: PropTypes.func.isRequired,
  //  incrementAsync: PropTypes.func.isRequired,
  //  decrement: PropTypes.func.isRequired,
  //  counter: PropTypes.number.isRequired
  //};

  render() {
    const {
      actions: {increment, incrementIfOdd, incrementAsync, decrement},
      counter: {
        counter
        } } = this.props;

    return (
      <p>
        Clicked: {counter} times
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

  static async fetchData() {
    console.log('fetch data START', fetchCounter);
    await fetchCounter();
    console.log('fetch data DONE');
  }
}

