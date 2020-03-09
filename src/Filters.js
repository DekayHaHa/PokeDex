import React, { Component } from 'react';
import CheckBox from './CheckBox'

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  displayBoxes = key => {
    const { checkBoxFilters, weaknessFilters, typeFilters } = this.props;
    return this.props[key].map((val, i) => {
      return <CheckBox
        checkBoxFilters={checkBoxFilters}
        currentFilters={key === 'types' ? typeFilters : weaknessFilters}
        name={val}
        filter={key === 'pokemonTypes' ? 'type' : 'weakness'}
        key={i}
      />
    })
  }

  handleChange = event => {
    let searchText = event.target.value.toLowerCase();
    this.props.changeState({ searchText })
  }

  handleClick = () => {
    this.props.changeState({ isOpen: true })
  }

  render() {
    return (
      <header className='header'>
        <h1>Reactive PokeDex</h1>
        <input type="text" placeholder="Search Name..." onChange={this.handleChange} />
        <h3>Search by:</h3>
        <section class='checkbox-container'>
          <div class='filter-holder type'>
            <h3>Types</h3>
            <div class='checkboxes'>
              {
                this.displayBoxes('pokemonTypes')
              }
            </div>
          </div>
          <div class='filter-holder'>
            <h3>Weaknesses</h3>
            <div class='checkboxes'>
              {
                this.displayBoxes('pokemonWeaknesses')
              }
            </div>
          </div>
        </section>
      </header>
    );
  }
}
