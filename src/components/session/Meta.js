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
        <span>Username: {this.props.username}</span>
        <span>Test: {this.props.test_name}</span>
        <span>Date: {this.props.timestamp}</span>
      </div>
    )
  }
}

export default Meta;