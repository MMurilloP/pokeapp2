import React, { useEffect, useState, useContext } from "react";
import List from './List'
import axios from 'axios'
import { pokemonsContext } from "../../../context/pokemonsContext";
import "../../../styles/styles.css";

const Search = () => {

  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);
  const { pokemons, setNewPokemon } = useContext(pokemonsContext);

  useEffect(() => {
    setNotFound(false);
  }, [search])

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = async () => {
    const inputValue = search.trim().toLowerCase();
    if (inputValue !== '') {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
        const info = res.data;
        const abilities = info.abilities.map(ability => ability.ability.name);
        const newPokemon = {
          id: info.id.toString(),
          name: info.name,
          image: info.sprites.other.dream_world.front_default,
          typeOne: info.types[0].type.name,
          typeTwo: info.types.length > 1 ? info.types[1].type.name : 'Not second type',
          abilities,
          weight: info.weight
        }
        if (!pokemons.find(pokemon => pokemon.name === inputValue)) {
          setNewPokemon(newPokemon);
        }
      } catch (err) {
        setNotFound(true);
      }
    }
  };

  return (
    <div className="search-container">
      <h1>Busca un pokemon: </h1>
      <input className="search-input" type="text" value={search} onChange={handleInput} />
      <button className="search-button" onClick={handleSearch}>Search</button>
      {notFound ? <p className="search-error">¡Ese Pokemon no existe!</p> : null}
      <List pokemons={pokemons} />
    </div>
  );
};

export default Search;
