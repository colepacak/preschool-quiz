import { connect } from 'react-redux';

import * as actions from '../actions.js';
import Session from '../components/Session.js';

const mapStateToProps = state => {
  return {
    username: state.session.username,
    test: state.session.test,
    timestamp: state.session.timestamp,
    question_order: state.session.question_order,
    question_current: state.session.question_current,
    response_list: state.session.response_list,
    view_mode: state.session.view_mode,
    // test_list: mapValues(state.test_list, 'name')
    test_list: Object.keys(state.test_list).map(key => { return { id: key, name: state.test_list[key].name }; })
  }
};

const mapDispatchToProps = dispatch => {
  return {
    sessionCreate: (username, test, timestamp) => dispatch(actions.sessionCreate(username, test, timestamp))
  }
};

const SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Session);

export default SessionContainer;