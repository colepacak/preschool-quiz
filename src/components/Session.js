import React from 'react';
import PropTypes from 'prop-types';

import Registration from './Registration.js';

class Session extends React.Component {

  static propTypes = {
    // Properties
    username: PropTypes.string,
    test: PropTypes.string,
    timestamp: PropTypes.number,
    question_order: PropTypes.array,
    question_current: PropTypes.string,
    response_list: PropTypes.object,
    view_mode: PropTypes.string.isRequired,
    test_list: PropTypes.array.isRequired,
    // Actions
    sessionCreate: PropTypes.func.isRequired
  };

  render() {
    let view;
    switch (this.props.view_mode) {
      case 'registration':
      default:
        view = <Registration
          test_list={this.props.test_list}
          handleSubmit={this.props.sessionCreate}
        />;
        break;
    }

    return (
      <div>{view}</div>
    )
  }
}

export default Session;