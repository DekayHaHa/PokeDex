import React, { Component } from 'react';
import './App.css';
import { urlLanding } from './urlHolder'
import { fetchData, getFilters } from './Util'
import List from './List'
import Header from './Header'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      pokemon: [],
      pokemonTypes: [],
      pokemonWeaknesses: []
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

  render() {
    const { isLoading, pokemon } = this.state;
    return (
      <article>
        <Header />
        {console.log(this.state)}
        <List pokemon={pokemon} />
      </article>
    );
  }
}
