import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {

  static propTypes = {
    question_id: PropTypes.string.isRequired,
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
              const key = this.props.question_id + '-option-' + o.id;
              return (
                <div key={key}>
                  <input id={key} type="radio" value={o.id} name="option"/>
                  <label htmlFor={key}>{o.value}</label>
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