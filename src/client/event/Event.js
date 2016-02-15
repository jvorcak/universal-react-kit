import React, { Component, PropTypes } from 'react';
import { FormattedMessage, defineMessages, injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router';

import { getAllEvents } from '../../common/event/actions';

const messages = defineMessages({
  eventsTitle: {
    id: 'eventsTitle',
    defaultMessage: 'Events title',
  },
});

class EventsApp extends Component {

  static propTypes = {
    //actions: React.PropTypes.shape({
    //  incrementEvent: PropTypes.func.isRequired,
    //  decrementEvent: PropTypes.func.isRequired,
    //}),
  };

  componentDidMount() {
    const {actions: {getAllEvents}, event: {events}} = this.props;

    // if no events are in the component, let's load them
    if(!events) {
      getAllEvents().then
    }
  }

  render() {
    const { actions, event }  = this.props;

    return (
      <div>
        <div><Link to={`/event/create`}>Create event</Link></div>
        Events {event.events}
      </div>
    );
  }
}

const wrappedEventsApp = injectIntl(EventsApp);
/**
 * Here we define all async actions that needs
 * to be completed before this class is rendered
 * on a server
 */
wrappedEventsApp.needs = [
  getAllEvents,
];
export default wrappedEventsApp;


