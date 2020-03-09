import React, { Component } from 'react';
import { PokemonCard } from './PokemonCard'


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    }
  }

  componentDidUpdate = prevProps => {
    const { pokemon } = this.props
    if (prevProps !== this.props) {
      this.setState({ pokemon })
    }
  }

  filterByName = pokemon => {
    return pokemon.filter(mon => mon.name.toLowerCase().includes(this.props.searchText))
  }

  filterByType = pokemon => {
    const { typeFilters } = this.props
    return pokemon.filter(mon => typeFilters.every(weakness => mon['type'].includes(weakness)))
  }

  filterByWeakness = pokemon => {
    const { weaknessFilters } = this.props
    return pokemon.filter(mon => weaknessFilters.every(weakness => mon['weaknesses'].includes(weakness)))
  }

  displayPokemon = pokemon => {
    return pokemon.map(mon => <PokemonCard {...mon} />)
  }
  // A list of all pokemon based on filters
  render() {
    const allPokemon = this.state.pokemon;
    const byName = this.filterByName(allPokemon);
    const byType = this.filterByType(byName);
    const toDisplay = this.filterByWeakness(byType);

    return (

      <section class='list-container'>
        {this.displayPokemon(toDisplay)}
      </section>
    );
  }
}
