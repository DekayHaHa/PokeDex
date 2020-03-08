import React, { Component } from 'react';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // button for types
  // button for weaknesses
  // search bar for name/number
  handleChange = event => {
    let searchText = event.target.value.toLowerCase();
    this.props.changeState({ searchText })
  }
  render() {
    return (
      <header>
        <h1>HEADER</h1>
        <input type="text" placeholder="Name..." onChange={this.handleChange} />
      </header>
    );
  }
}
