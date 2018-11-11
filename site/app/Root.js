import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from './components/layout/Layout';
import {routes} from './config/routes';

const Root = () => (
  <Router>
    <Layout>
      <Switch>
        {Object.keys(routes).map((key, index) => (
          <Route {...routes[key]} key={index}/>
        ))}
      </Switch>
    </Layout>
  </Router>
);

export default Root;
