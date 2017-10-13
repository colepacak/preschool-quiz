import defaultState from './default-state.js';

function sessionReducer(state = {}, action, test_list) {
  switch(action.type) {

    case 'SESSION_VIEW_MODE_CHANGE':
      return {
        ...state,
        view_mode: action.payload.view_mode
      };

    case 'SESSION_CREATE':
      let question_order = Object.keys(test_list[action.payload.test_id].question_list);
      return {
        ...state,
        uuid: action.payload.uuid,
        username: action.payload.username,
        test_id: action.payload.test_id,
        timestamp: action.payload.timestamp,
        question_order: question_order,
        question_current: question_order[0],
        response_list: {}
      };

    case 'SESSION_RESPONSE_ADD':
      // Reject invalid responses
      const option_list = Object.keys(test_list[state.test_id].question_list[state.question_current].option_list);
      if (!option_list.includes(action.payload.response.toString())) { return state; }

      return {
        ...state,
        response_list: {
          ...state.response_list,
          [state.question_current]: action.payload.response
        }
      };

    case 'SESSION_QUESTION_CURRENT_INCREMENT':
      let index = state.question_order.indexOf(state.question_current);
      // Prevent the advancement to non-existent questions.
      if (state.question_order[index + 1] === undefined) { return state; }

      return {
        ...state,
        question_current: state.question_order[index + 1]
      };

    case 'SESSION_QUESTION_CURRENT_UNSET':
      return {
        ...state,
        question_current: null
      };

    // Clear everything form the session except for the view mode.
    case 'SESSION_REMOVE':
      return {
        view_mode: state.view_mode
      };

    default:
      return state;
  }
}

function resultReducer(state = {}, action) {
  switch (action.type) {
    case 'RESULT_CREATE':
      const { session, test } = action.payload;
      // Tally score
      const questions_total = Object.keys(test.question_list).length;

      const questions_correct = Object.keys(session.response_list).reduce(function(accumulator, question) {
        const is_correct = session.response_list[question] === test.question_list[question].answer;
        return is_correct ? accumulator + 1 : accumulator;
      }, 0);

      return {
        ...state,
        [session.uuid]: {
          username: session.username,
          test: session.test_id,
          timestamp: session.timestamp,
          score: parseFloat((questions_correct / questions_total).toFixed(4))
        }
      };
    default:
      return state;
  }
}

export default function mainReducer(state = defaultState, action) {
  return {
    test_list: defaultState.test_list,
    session: sessionReducer(state.session, action, state.test_list),
    result_list: resultReducer(state.result_list, action),
  }
}