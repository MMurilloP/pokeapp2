import React, { useEffect, useState, useRef, useContext } from "react";
import List from './List'
import axios from 'axios'
import { pokemonsContext } from "../../../context/pokemonsContext";
import "../../../styles/styles.css";

const Search = () => {

  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);
  const { pokemons, setNewPokemon } = useContext(pokemonsContext);
  const inputRef = useRef();

  useEffect(() => {
    setNotFound(false);
    let notFoundTimer;    
    async function getPokemon() {
      if (search !== '') {
        const lowCaseSearch = search.toLowerCase();
        if (!pokemons.find(pokemon => pokemon.name === lowCaseSearch)) {
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowCaseSearch}`);
            const info = res.data;
            const abilities = info.abilities.map(ability => ability.ability.name);
            const moves = info.moves.map(move => move.move.name);
            const smallImages = [info.sprites.front_default, info.sprites.back_default ]
            const bigImages = [info.sprites.other.home.front_default, info.sprites.other['official-artwork'].front_default]
            const newPokemon = {
              id: info.id.toString(),
              name: info.name,
              image: info.sprites.other.dream_world.front_default,
              typeOne: info.types[0].type.name,
              typeTwo: info.types.length > 1 ? info.types[1].type.name : 'Not second type',
              abilities,
              moves,
              smallImages,
              bigImages,
              weight: info.weight
            }
            setNewPokemon(newPokemon);
          } catch (err) {
            setNotFound(true);        
          }
        }
      }
    }
    const timer = setTimeout(getPokemon, 2500);
    notFoundTimer = setTimeout(() => setNotFound(false), 2000);
    return () => {
      clearTimeout(timer); 
      clearTimeout(notFoundTimer);
    }
  }, [search, pokemons, setNewPokemon]);

  useEffect(() => {
    setSearch('')
  }, [pokemons])
  
  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    const inputValue = inputRef.current.value.trim();
    if (inputValue !== '') {
      setSearch(inputValue);
    }
  };

  return (
    <div className="search-container">
      <h1>Busca un pokemon: </h1>
      <input className="search-input" type="text" ref={inputRef} value={search} onChange={handleInput} />
      <button className="search-button" onClick={handleSearch} disabled={search.trim() === ''}>Search</button>
      {notFound ? <p className="search-error">That Pokemon doesn´t exist!</p> : null}
      <List pokemons={pokemons} />
    </div>
  );
};

export default Search;
