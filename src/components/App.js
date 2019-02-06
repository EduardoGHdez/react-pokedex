import React, { Component } from 'react';
import axios from 'axios';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../helpers/Pokemon'
import './styles/App.css';



class App extends Component {
  constructor () {
    super();
    this.state = { pokemon: {} };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id){
    console.log(id);

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then( res => {
        const pokemon = new Pokemon(res.data);
        this.setState({ pokemon })
      } ).catch( err => {
        console.log(err);
      } );
  }


  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick}/>
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
