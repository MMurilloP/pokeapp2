import React from "react";
import { Link } from 'react-router-dom';
import "../../../styles/styles.css"; // importa tu archivo de estilos

const Nav = () => {
  return (
    <nav className="nav-container">
      <img className="nav-img" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />
      <Link to="/">Home</Link>
      <Link to="/new">Crear Pokemon</Link>
      <Link to="/search">Buscar</Link>
    </nav>
  );
};

export default Nav;
