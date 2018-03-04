import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Immutable from 'immutable';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import 'styles/custom.css';
import { createBrowserHistory } from 'history';
import Routes from '~/routes';

const history = createBrowserHistory();
const initialState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
  serialize: { immutable: Immutable }
});
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history))
));
//const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
