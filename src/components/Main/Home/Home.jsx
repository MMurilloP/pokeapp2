import React, { useContext } from "react";
import { pokemonsContext } from "../../../context/pokemonsContext";
import List from "../Search/List";
import "../../../styles/styles.css"; 

const Home = () => {
  const { pokemons } = useContext(pokemonsContext);

  return (
    <section className="home-container">
      <h1>Lista Pokemons: </h1>
      <div className="cards-container">
        {pokemons.length > 0 ? <List pokemons={pokemons} /> : <></>}
      </div>
    </section>
  );
};

export default Home;
