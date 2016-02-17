import React from 'react';
import App from './app/App';
import Counter from './counter/Counter';
import EventsApp from './event/Event';
import { EventsCreateApp } from './event/CreateEvent';
import { Route } from 'react-router';
import RegisterApp from './auth/RegisterApp';

// simple NotFound component
const NotFound = () => <div>Not found</div>;

export default function createRoutes() {
  return (
    <Route component={App} path="/">
      <Route component={Counter} path="counter"/>
      <Route component={EventsApp} path="event"/>
      <Route component={EventsCreateApp} path="event/create"/>
      <Route component={RegisterApp} path="register"/>
      <Route component={NotFound} path="*"/>
    </Route>
  );
}
