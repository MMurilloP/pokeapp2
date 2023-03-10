import React from "react";
import { Link } from 'react-router-dom'
import '../../../../../styles/styles.css'

const Card = (props) => {
  return (
      <div className="card-container">
        <img className="card-img" src={props.pokemon.image} alt="" />
        <Link className="card-link" to={`/pokemon/${props.pokemon.id}?name=${props.pokemon.name}&image=${props.pokemon.image}&typeOne=${props.pokemon.typeOne}&typeTwo=${props.pokemon.typeTwo}&abilities=${JSON.stringify(props.pokemon.abilities)}&moves=${JSON.stringify(props.pokemon.moves)}&smallImages=${JSON.stringify(props.pokemon.smallImages)}&bigImages=${JSON.stringify(props.pokemon.bigImages)}&weight=${props.pokemon.weight}`}>
          <p className="card-name">{props.pokemon.name}</p>
        </Link>
        <button onClick={() => props.onDelete(props.pokemon.id)}>Eliminar</button>
      </div>
  )
};

export default Card;
