import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="session--section--result">
        result
        <button onClick={this.props.onSubmit}>End Test</button>
      </div>
    )
  }
}

export default Result;