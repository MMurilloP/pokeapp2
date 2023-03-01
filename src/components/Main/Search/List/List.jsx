import React from "react";
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'

const List = (props) => {

  const printPokemons = () => props.pokemons.map(pokemon => <Card pokemon={pokemon} key={uuidv4()} />)
  

  return <section>
    {printPokemons()}
  </section>;
};

export default List;
