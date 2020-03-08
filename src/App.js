import React, { Component } from 'react';
import './App.css';
import { urlLanding } from './urlHolder'
import { fetchData } from './fetchUtil'
import List from './List'
import Header from './Header'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      pokemon: [],
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
    await this.changeState({ isLoading: false });
  }

  changeState = newState => this.setState(newState)

  render() {
    const { isLoading, pokemon } = this.state;
    return (
      <article>
        <Header />
        <List />
      </article>
    );
  }
}
