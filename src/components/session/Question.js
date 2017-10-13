import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    option_list: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e.target.option.value);
  }

  render() {
    return (
      <div className="session--section--test">
        <div className="session--test-question--text">{this.props.text}</div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          {
            this.props.option_list.map(o => {
              return (
                <div key={o.id}>
                  <input id={'option-' + o.id} type="radio" value={o.id} name="option"/>
                  <label htmlFor={'option-' + o.id}>{o.value}</label>
                </div>
              )
            })
          }
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Question;