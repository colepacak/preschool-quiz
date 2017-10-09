import React from 'react';
import PropTypes from 'prop-types';

class Registration extends React.Component {

  static propTypes = {
    test_list: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  _buildTestOptions() {
    const options = this.props.test_list.map((t, i) => {
      return (
        <div key={t.id}>
          <input id={t.id} type="radio" value={t.id} name="test" defaultChecked={i === 0}/>
          <label htmlFor={t.id}>{t.name}</label>
        </div>
      )
    });

    return (
      <div className="test-options">
        {options}
      </div>
    );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(e.target.name.value, e.target.test.value, new Date().getTime());
  }

  render() {
    const testOptions = this._buildTestOptions();
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <input name="name" type="text"/>
        {testOptions}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Registration;