import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {

  static propTypes = {
    score: PropTypes.number,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="session--section--result">
        <div>Score: {(this.props.score * 100) + '%'}</div>
        <br/>
        <button onClick={this.props.onSubmit}>End Test</button>
      </div>
    )
  }
}

export default Result;