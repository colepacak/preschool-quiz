export function sessionCreate(username, test, timestamp) {
  return {
    type: 'SESSION_CREATE',
    payload: {
      username,
      test,
      timestamp
    }
  }
}

export function sessionRemove() {
  return {
    type: 'SESSION_REMOVE'
  }
}

export function sessionResponseReceive(response) {
  return {
    type: 'SESSION_RESPONSE_RECEIVE',
    payload: {
      response
    }
  }
}

export function sessionNextQuestion() {
  return {
    type: 'SESSION_NEXT_QUESTION'
  }
}


export function resultCreate(session, test) {
  return {
    type: 'RESULT_CREATE',
    payload: {
      session,
      test
    }
  }
}
