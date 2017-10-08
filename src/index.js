import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { last } from 'lodash';

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
        option_list: { 0: 'c', 1: 'd', 2: 'b' }
      },
      5: {
        question: 'What is the first letter of dinosaur?',
        answer: 1,
        option_list: { 0: 'c', 1: 'd', 2: 'b' }
      },
      7: {
        question: 'What is the first letter of ant?',
        answer: 2,
        option_list: { 0: 'e', 1: 'i', 2: 'a' }
      }
    }
  }
};

store.dispatch(actions.receiveTestList(test_list));
store.dispatch(actions.changeViewMode('registration'));

store.dispatch(actions.initSession('lucia', 'letter_sounds', 1506107974));
store.dispatch(actions.changeViewMode('test'));

store.dispatch(actions.receiveQuestionResponse(0));
nextQuestion();

store.dispatch(actions.receiveQuestionResponse(1));
nextQuestion();

store.dispatch(actions.receiveQuestionResponse(1));
nextQuestion();

// Determine if we proceed to next question or finish the test
function nextQuestion(state = store.getState()) {
  let session = state.session;

  if (last(session.question_order) === session.question_current) {
    const test = state.test_list[session.test];
    store.dispatch(actions.createResult(session, test));
    store.dispatch(actions.changeViewMode('result'));
  } else {
    store.dispatch(actions.nextQuestion());
  }
}

window.store = store;

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
