import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { 
  Welcome,
  Account,
  NotFound
} from 'views';

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/account" component={Account}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}

export default Routes;
