import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Salary from './pages/Salary';
import Distance from './pages/Distance';
import Order from './pages/Order';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/salary" component={Salary} />
        <Route path="/distance" component={Distance} />
        <Route path="/order" component={Order} />
      </Switch>
    </BrowserRouter>
  );
}