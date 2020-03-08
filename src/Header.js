import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'


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

  handleClick = () => {
    this.props.changeState({ isOpen: true })
  }

  render() {
    const { changeState } = this.props
    return (
      <header>
        <h1>HEADER</h1>
        <input type="text" placeholder="Name..." onChange={this.handleChange} />
        <Button onClick={this.handleClick}>Filter by Types / Weaknesses</Button>
      </header>
    );
  }
}
