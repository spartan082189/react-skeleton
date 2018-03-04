import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Immutable from 'immutable';
import { syncHistoryWithStore } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();
const initialState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
  serialize: { immutable: Immutable }
});
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk)
));
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
