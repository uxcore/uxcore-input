/**
 * Input Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const Input = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Input
          placeholder="1"
          className="kuma-input"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

module.exports = Demo;
