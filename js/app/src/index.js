import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import mainReducer from './reducers.js';
import * as actions from './actions.js';

const loggerMiddleware = createLogger();

let storeMiddleware = [];

if (module.hot) {
  storeMiddleware.push(loggerMiddleware);
}
let store = createStore(
  mainReducer,
  applyMiddleware(...storeMiddleware)
);

const test_list = {
  letter_sounds: {
    name: 'Letter sounds',
    question_list: {
      0: {
        question: 'What is the first letter of cups?',
        answer: 0,
        options: { 0: 'c', 1: 'd', 2: 'b' }
      },
      5: {
        question: 'What is the first letter of dinosaur?',
        answer: 1,
        options: { 0: 'c', 1: 'd', 2: 'b' }
      },
      7: {
        question: 'What is the first letter of ant?',
        answer: 2,
        options: { 0: 'e', 1: 'i', 2: 'a' }
      }
    }
  }
};

store.dispatch(actions.receiveTestList(test_list));

store.dispatch(actions.initSession('lucia', 'letter_sounds', 1506107974));

store.dispatch(actions.receiveQuestionResponse(0));

store.dispatch(actions.advanceQuestionCurrent());

let session = {
  username: 'Lucia',
  test: 'letter_sounds',
  timestamp: 1506002406,
  question_order: [0, 1, 2],
  question_current: 2,
  response_list: {
    0: 0,
    1: 1
  }
};

let result_list = {
  0: {
    username: 'Scarlett',
    test: 'letter_sounds',
    timestamp: 1506002406,
    score: 0.33
  }
};
