import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from '../pages/Main';
import Details from '../pages/Details';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Main}/>
    <Route path="/details" component={Details}/>
  </Switch>
)

export default Routes;