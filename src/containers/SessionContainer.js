import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import * as actions from '../actions.js';
import Session from '../components/session/index.js';

const mapStateToProps = state => {
  return {
    view_mode: state.session.view_mode,
    test_option_list: Object.keys(state.test_list).map(key => { return { id: key, name: state.test_list[key].name }; }),
    username: state.session.username,
    timestamp: state.session.timestamp,
    test: state.test_list[state.session.test_id],
    question_current: state.session.question_current,
    result: state.result_list[state.session.uuid]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    sessionViewModeChange: (view_mode) => dispatch(actions.sessionViewModeChange(view_mode)),
    sessionCreate: (username, test, timestamp) => dispatch(actions.sessionCreate(uuid(), username, test, timestamp)),
    sessionResponseSubmit: response => dispatch(actions.sessionResponseSubmit(response)),
    sessionRemove: () => dispatch(actions.sessionRemove())
  }
};

const SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Session);

export default SessionContainer;