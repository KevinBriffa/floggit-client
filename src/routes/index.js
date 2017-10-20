import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Whiteboard from '../pages/Whiteboard';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/whiteboard/:id" component={Whiteboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
