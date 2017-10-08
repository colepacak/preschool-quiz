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

export function nextQuestion() {
  return {
    type: 'NEXT_QUESTION'
  }
}

export function removeSession() {
  return {
    type: 'REMOVE_SESSION'
  }
}

export function createResult(session, test) {
  return {
    type: 'CREATE_RESULT',
    payload: {
      session,
      test
    }
  }
}

export function changeViewMode(mode) {
  return {
    type: 'CHANGE_VIEW_MODE',
    payload: {
      mode
    }
  }
}