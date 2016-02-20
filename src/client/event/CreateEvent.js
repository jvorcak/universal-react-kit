import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

export const fields = ['name', 'location'];

class CreateEvent extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  saveEventHandler = (e) => {
    e.preventDefault();
    const { resetForm, actions: { saveEvent }, fields } = this.props;
    saveEvent(fields);
    resetForm();
  };

  render() {
    const { fields: { name, location } } = this.props;

    return (
      <div>
        <h2>Create event</h2>
        <form onSubmit={e => this.saveEventHandler(e)}>
          <div>
            <label>Name</label>
            <div>
              <input type="text" placeholder="Name" {...name}/>
            </div>
          </div>
          <div>
            <label>Location</label>
            <div>
              <input type="text" placeholder="Location" {...location}/>
            </div>
          </div>
          <button type="submit">Save event</button>
        </form>
      </div>
    );
  }
}

const CreateEventWrappedIntl = injectIntl(CreateEvent);
const CreateEventWrappedReduxForm = reduxForm({
  form: 'newEvent',
  fields,
})(CreateEventWrappedIntl);

export class EventsCreateApp extends Component {
  render() {
    return <CreateEventWrappedReduxForm actions={this.props.actions}/>;
  }
}
