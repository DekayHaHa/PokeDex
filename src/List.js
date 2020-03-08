import React, { Component } from 'react';


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // A list of all pokemon based on filters
  render() {
    return (

      <section >
        <h1>LIST</h1>
        {this.props.pokemon.map(mon => {
          return <img src={mon.img} alt={mon.name} />
        })}
      </section>
    );
  }
}
