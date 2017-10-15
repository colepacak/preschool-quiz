import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import mainReducer from './reducers.js';
import SessionContainer from './containers/SessionContainer.js';
import LeaderboardContainer from './containers/LeaderboardContainer.js';

const loggerMiddleware = createLogger();

let storeMiddleware = [thunkMiddleware];

if (module.hot) {
  storeMiddleware.push(loggerMiddleware);
}
let store = createStore(
  mainReducer,
  applyMiddleware(...storeMiddleware)
);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <SessionContainer />
  </Provider>,
  document.getElementById('session')
);

ReactDOM.render(
  <Provider store={store}>
    <LeaderboardContainer />
  </Provider>,
  document.getElementById('leaderboard')
);