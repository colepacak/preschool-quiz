import React from 'react';
import PropTypes from 'prop-types';

class Leaderboard extends React.Component {

  static propTypes = {
    result_list: PropTypes.array
  };

  render() {
    const row_list = this.props.result_list
      // Sort descending by score
      .sort((a, b) => {
        if (a.score < b.score) { return 1; }
        if (a.score > b.score) { return -1; }
        return 0;
      })
      // Sort descending by date
      .sort((a, b) => {
        if (a.timestamp < b.timestamp) { return 1; }
        if (a.timestamp > b.timestamp) { return -1; }
        return 0;
      })
      .map(r => {
        return (
          <tr key={r.uuid}>
            <td>{r.username}</td>
            <td>{new Date(r.timestamp).toDateString()}</td>
            <td>{(r.score * 100) + '%'}</td>
          </tr>
        )
      });
    return (
      <div>
        <h2>Leaderboard</h2>
        <table>
          <tbody>
            {row_list}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Leaderboard;