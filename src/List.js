import React, { Component } from 'react';


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

  // filterByKey = (pokemon, filters, key) => {
  // const { typeFilters } = this.props
  // return pokemon.filter(mon => [filters].every(type => mon[key].includes(type)))
  // }


  filterByType = pokemon => {
    const { typeFilters } = this.props
    return pokemon.filter(mon => typeFilters.every(weakness => mon['type'].includes(weakness)))
  }


  filterByWeakness = pokemon => {
    const { weaknessFilters } = this.props
    return pokemon.filter(mon => weaknessFilters.every(weakness => mon['weaknesses'].includes(weakness)))
  }

  // A list of all pokemon based on filters
  render() {
    const allPokemon = this.state.pokemon;
    const { typeFilters, weaknessFilters } = this.props;
    const byName = this.filterByName(allPokemon);
    const byType = this.filterByType(byName);
    const toDisplay = this.filterByWeakness(byType);


    // const bytype = this.filterByKey(byName, typeFilters, 'type')
    // const toDisplay = this.filterByKey(bytype, weaknessFilters, 'weaknesses')

    return (

      <section >
        <h1>LIST</h1>
        {toDisplay.map(mon => {
          return <img src={mon.img} alt={mon.name} />
        })}
      </section>
    );
  }
}
