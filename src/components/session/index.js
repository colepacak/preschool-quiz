import React from 'react';
import PropTypes from 'prop-types';
import { transform } from 'lodash';

import Registration from './Registration.js';
import Meta from './Meta.js';
import Question from './Question.js';
import Result from './Result.js';

class Session extends React.Component {

  static propTypes = {
    // Properties
    username: PropTypes.string,
    timestamp: PropTypes.number,
    question_current: PropTypes.string,
    view_mode: PropTypes.string.isRequired,
    test_option_list: PropTypes.array.isRequired,
    test: PropTypes.object,
    result: PropTypes.object,
    // Actions
    sessionViewModeChange: PropTypes.func.isRequired,
    sessionCreate: PropTypes.func.isRequired,
    sessionResponseSubmit: PropTypes.func.isRequired,
    sessionRemove: PropTypes.func.isRequired
  };

  _getViewModeTest() {
    const question_current = this.props.test.question_list[this.props.question_current];
    return (
      <div className="session--view-mode--test">
        <h2>Test in Progress</h2>
        <Meta
          username={this.props.username}
          test_name={this.props.test.name}
          timestamp={this.props.timestamp}
        />
        <br/>
        <Question
          text={question_current.text}
          option_list={transform(question_current.option_list, function(result, value, key) {
            result.push({ id: key, value: value });
          },[])}
          onSubmit={this.props.sessionResponseSubmit}
        />
      </div>
    );
  }

  _getViewModeRegistration() {
    return (
      <div className="session--view-mode--registration">
        <h2>Registration</h2>
        <Registration
          test_option_list={this.props.test_option_list}
          onSubmit={(name, test, time) => {
            this.props.sessionCreate(name, test, time);
            this.props.sessionViewModeChange('test');
          }}
        />
      </div>
    );
  }

  _getViewModeResult() {
    return (
      <div className="session--view-mode--result">
        <h2>Result</h2>
        <Meta
          username={this.props.username}
          test_name={this.props.test.name}
          timestamp={this.props.timestamp}
        />
        <br/>
        <Result
          score={this.props.result.score}
          onSubmit={() => {
            this.props.sessionRemove();
            this.props.sessionViewModeChange('registration');
          }}
        />
      </div>
    )
  }

  render() {
    let view;
    switch (this.props.view_mode) {
      case 'test':
        view = this._getViewModeTest();
        break;
      case 'result':
        view = this._getViewModeResult();
        break;
      case 'registration':
      default:
        view = this._getViewModeRegistration();
        break;
    }

    return (
      <div>{view}</div>
    )
  }
}

export default Session;