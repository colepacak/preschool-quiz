import { connect } from 'react-redux';
import { transform } from 'lodash';

import Leaderboard from '../components/leaderboard/index.js';

const mapStateToProps = state => {
  return {
    result_list: transform(state.result_list, (result, value, key) => {
      result.push({ uuid: key, ...value })
    }, [])
  }
};

const LeaderboardContainer = connect(
  mapStateToProps
)(Leaderboard);

export default LeaderboardContainer;