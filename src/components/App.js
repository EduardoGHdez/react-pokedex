import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../helpers/Pokemon'
import './styles/App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {};
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id){
    console.log(id);
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`).then( res => res.json() ).then( data => {
      const pokemon = new Pokemon(data);
      console.log(pokemon);
    }).catch(err => console.log(err));

  }


  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick}/>
        <DetailView />
      </div>
    );
  }
}

export default App;
