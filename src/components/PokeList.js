import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../helpers/pokeClasses'
import './styles/PokeList.css'

const PokeList = ({ handleOnClick }) => {
  const pokemons = pokeClasses.map(pokeClass => {
    return(
      <PokeCell
        key={pokeClass.id}
        pokeClass={pokeClass}
        handleOnClick={handleOnClick}
      />
    );
  });
  return (
    <section className="poke-list">
      {pokemons}
    </section>
  )
}

export default PokeList;
