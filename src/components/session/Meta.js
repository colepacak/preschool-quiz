import React from 'react';
import PropTypes from 'prop-types';

class Meta extends React.Component {

  static propTypes = {
    username: PropTypes.string,
    test_name: PropTypes.string,
    timestamp: PropTypes.number
  };

  render() {
    return (
      <div className="session--section--meta">
        <div>Username: {this.props.username}</div>
        <div>Test: {this.props.test_name}</div>
        <div>Date: {this.props.timestamp}</div>
      </div>
    )
  }
}

export default Meta;