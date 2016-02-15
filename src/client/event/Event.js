import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class Event extends Component {

  static propTypes = {
    actions: React.PropTypes.shape({
      incrementEvent: PropTypes.func.isRequired,
      decrementEvent: PropTypes.func.isRequired,
    }),
    fields: React.PropTypes.shape({
      incrementEvent: PropTypes.string.isRequired,
    }),
  };

  render() {
    const {
      actions: { incrementEvent, decrementEvent },
      fields: { name },
      } = this.props;

    return (
      <p>
        Event component
        {' '}
        <button onClick={incrementEvent}>+</button>
        {' '}
        <button onClick={decrementEvent}>-</button>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Name" {...name}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </p>
    );
  }
}

export default reduxForm({
  form: 'event',
  fields: ['name'],
})(Event);
