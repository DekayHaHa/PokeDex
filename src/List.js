import React, { Component } from 'react';
import { PokemonCard } from './PokemonCard'


export default class List extends Component {
  // make a functional component
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // possibly use a library if project had more data 
  filterByName = pokemon => {
    return pokemon.filter(mon => mon.name.toLowerCase().includes(this.props.searchText))
  }

  // Could possibly comnine type/weakness filters
  filterByType = pokemon => {
    const { typeFilters } = this.props
    return pokemon.filter(mon => typeFilters.every(weakness => mon['type'].includes(weakness)))
  }

  filterByWeakness = pokemon => {
    const { weaknessFilters } = this.props
    return pokemon.filter(mon => weaknessFilters.every(weakness => mon['weaknesses'].includes(weakness)))
  }

  displayPokemon = pokemon => {
    return pokemon.map(mon => <PokemonCard key={mon.num} {...mon} />)
  }
  render() {
    // A list of all pokemon based on filters
    const allPokemon = this.props.pokemon;
    const byName = this.filterByName(allPokemon);
    const byType = this.filterByType(byName);
    const toDisplay = this.filterByWeakness(byType);

    return (
      <section className='list-container'>
        {this.displayPokemon(toDisplay)}
      </section>
    );
  }
}
