import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Welcome from './Welcome';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="welcome" component={Welcome} title="Welcome" />
    </Scene>
  </Router>
);

export default RouterComponent;
