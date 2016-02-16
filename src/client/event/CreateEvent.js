import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

export const fields = ['name'];

class CreateEvent extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  render() {
    const { fields: { name } } = this.props;

    return (
      <div>
        <h2>Create event</h2>
        <form>
          <div>
            <label>Name</label>
            <div>
              <input type="text" placeholder="Name" {...name}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const CreateEventWrappedIntl = injectIntl(CreateEvent);
const CreateEventWrappedReduxForm = reduxForm({
  form: 'simple',
  fields,
})(CreateEventWrappedIntl);

export const EventsCreateApp = () => <CreateEventWrappedReduxForm/>;
