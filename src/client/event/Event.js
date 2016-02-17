import React, { Component, PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router';

import { getAllEvents as asyncAction } from '../../common/event/actions';

class EventsApp extends Component {

  static propTypes = {
    event: React.PropTypes.shape({
      events: PropTypes.array.isRequired,
    }),
    actions: React.PropTypes.shape({
      getAllEvents: PropTypes.func.isRequired,
    }),
  };

  componentDidMount() {
    const { actions: { getAllEvents }, event: { events } } = this.props;

    // if no events are in the component, let's load them
    if (!events) {
      getAllEvents();
    }
  }

  render() {
    const { event } = this.props;

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
  asyncAction,
];
export default wrappedEventsApp;
