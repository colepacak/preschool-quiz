import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { last } from 'lodash';

import mainReducer from './reducers.js';
import * as actions from './actions.js';
import SessionContainer from './containers/SessionContainer.js';

const loggerMiddleware = createLogger();

let storeMiddleware = [thunkMiddleware];

if (module.hot) {
  storeMiddleware.push(loggerMiddleware);
}
let store = createStore(
  mainReducer,
  applyMiddleware(...storeMiddleware)
);

// store.dispatch(actions.sessionCreate('Lucia', 'letter_sounds', 1506107974));
//
// store.dispatch(actions.sessionResponseSubmit(0));
// nextQuestion();
//
// store.dispatch(actions.sessionResponseSubmit(1));
// nextQuestion();
//
// store.dispatch(actions.sessionResponseSubmit(1));
// nextQuestion();
//
// // Determine if we proceed to next question or finish the test
// function nextQuestion(state = store.getState()) {
//   let session = state.session;
//
//   if (last(session.question_order) === session.question_current) {
//     const test = state.test_list[session.test];
//     store.dispatch(actions.resultCreate(session, test));
//   } else {
//     store.dispatch(actions.sessionNextQuestion());
//   }
// }

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <SessionContainer />
  </Provider>,
  document.getElementById('session')
);