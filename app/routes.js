/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Randomizer from './containers/Randomizer'

export default () => (
  <App>
    <Switch>
      <Route path="/" component={Randomizer} />
    </Switch>
  </App>
);
