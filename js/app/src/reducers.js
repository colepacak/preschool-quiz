function testReducer(state = {}, action) {
  switch(action.type) {
    case 'RECEIVE_TEST_LIST':
      return action.payload.list;
      break;
    default:
      return state;
  }
}

function sessionReducer(state = {}, action, test_list) {
  switch(action.type) {
    case 'INIT_SESSION':
      // todo: random shuffling of questions would go here.
      let question_order = Object.keys(test_list[action.payload.test].question_list);
      return {
        username: action.payload.username,
        test: action.payload.test,
        timestamp: action.payload.timestamp,
        question_order: question_order,
        question_current: question_order[0],
        response_list: {}
      };
      break;

    case 'RECEIVE_QUESTION_RESPONSE':
      return {
        ...state,
        response_list: {
          ...state.response_list,
          [state.question_current]: action.payload.response
        }
      };
      break;

    case 'ADVANCE_QUESTION_CURRENT':
      let index = state.question_order.indexOf(state.question_current);
      return {
        ...state,
        question_current: state.question_order[index + 1]
      };
      break;
    default:
      return state;
  }
}

export default function mainReducer(state = {}, action) {
  return {
    test_list: testReducer(state.test_list, action),
    session: sessionReducer(state.session, action, state.test_list)
  }
}