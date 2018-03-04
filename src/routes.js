import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { 
  Welcome,
  Account
} from 'views';

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/account" component={Account}/>
      </Switch>
    )
  }
}

export default Routes;
