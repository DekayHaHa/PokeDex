import React, { Component } from 'react';
import './App.css';
import { urlLanding } from './urlHolder'
import { fetchData, getFilters } from './Util'
import List from './List'
import Filters from './Filters'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      pokemon: [],
      pokemonTypes: [],
      pokemonWeaknesses: [],
      searchText: '',
      typeFilters: [],
      weaknessFilters: [],
      isOpen: false,

    }
  }
  componentDidMount = () => {
    this.getData();
  }

  getData = async () => {
    const url = urlLanding();
    await this.changeState({ isLoading: true });
    const data = await fetchData(url);
    await this.changeState({ pokemon: data.pokemon });
    await this.setFilters();
    await this.changeState({ isLoading: false });
  }

  setFilters = () => this.changeState(getFilters(this.state.pokemon))

  changeState = newState => this.setState(newState)

  checkBoxFilters = (key, toFilterBy) => {
    let newFilters = this.state[key]

    if (this.state[key].includes(toFilterBy)) {
      newFilters = newFilters.filter(val => val !== toFilterBy)
    } else {
      newFilters.push(toFilterBy)
    }
    this.changeState({ [key]: newFilters })
  }

  render() {
    return (
      <article className='app'>
        <Filters
          {...this.state}
          changeState={this.changeState}
          checkBoxFilters={this.checkBoxFilters}
        />
        <List {...this.state} />
      </article>
    );
  }
}
