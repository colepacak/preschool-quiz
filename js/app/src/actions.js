export function receiveTestList(list) {
  return {
    type: 'RECEIVE_TEST_LIST',
    payload: {
      list
    }
  }
}

export function initSession(username, test, timestamp) {
  return {
    type: 'INIT_SESSION',
    payload: {
      username,
      test,
      timestamp
    }
  }
}

export function receiveQuestionResponse(response) {
  return {
      type: 'RECEIVE_QUESTION_RESPONSE',
    payload: {
      response
    }
  }
}

export function advanceQuestionCurrent() {
  return {
    type: 'ADVANCE_QUESTION_CURRENT'
  }
}