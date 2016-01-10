import React from 'react';
import App from './app/App';
import Counter from './counter/Counter';
import {IndexRoute, Route} from 'react-router';

// simple NotFound component
const NotFound = () => <div>Not found</div>;

export default function createRoutes() {
  return (
    <Route component={App} path="/">
      <Route component={Counter} path="counter"/>
      <Route component={NotFound} path="*"/>
    </Route>
  );
}