import React, { Component, PropTypes } from 'react';
import { FormattedMessage, defineMessages, injectIntl, intlShape } from 'react-intl';

import { getAllEvents } from '../../common/event/actions';

const messages = defineMessages({
  eventsTitle: {
    id: 'eventsTitle',
    defaultMessage: 'Events title',
  },
});

class CreateEvent extends Component {

  render() {
    const { actions, event }  = this.props;

    return (
      <div>
        <h2>Create event</h2>
      </div>
    );
  }
}

const wrappedEventsApp = injectIntl(CreateEvent);
export default wrappedEventsApp;


