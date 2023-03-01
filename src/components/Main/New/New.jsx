import React, { useContext } from "react";
import { pokemonsContext } from "../../../context/pokemonsContext";
import { useForm } from 'react-hook-form'

const New = () => {
  const { pokemons, setNewPokemon } = useContext(pokemonsContext)
  const { register, handleSubmit, formState: { errors } } = useForm();

 
  const onSubmit = data => {
    const newPokemon = {
      ...data,
      id: '0'+ data.id, 
      name: data.name.toLowerCase(),
      typeTwo: data.typeTwo !== '' ? data.typeTwo : 'Not second type',
      abilities: [''],
      weight: ''
    }
    if (!pokemons.some(pokemon => pokemon.name === newPokemon.name || pokemon.id === newPokemon.id)) {
      setNewPokemon(newPokemon)
    } 

  }

  return (
    <section className="new-pokemon">
  <h1>Crea tu pokemon:</h1>
  <form onSubmit={handleSubmit(onSubmit)}>
    {errors.id && <span className="error-message">Must be greater than 0:</span>}
    <input type="number" placeholder="ID" {...register("id", { required: true, min: 0 })} className={errors.id ? "error-input" : ""} />
    {errors.name && <span className="error-message">Required and should have more than 3 characters:</span>}
    <input type="text" placeholder="name" {...register("name", { required: true, minLength: 3 })} className={errors.name ? "error-input" : ""} />
    {errors.image && <span className="error-message">Required:</span>}
    <input type="url" placeholder="image" {...register("image", { required: true })} className={errors.image ? "error-input" : ""} />
    {errors.typeOne && <span className="error-message">First type is required:</span>}
    <select {...register("typeOne", { required: true })} className={errors.typeOne ? "error-input" : ""} defaultValue="" >
      <option value="" disabled>First Type</option>
      <option value="normal">Normal</option>
      <option value="fighting">Fighting</option>
      <option value="flying">Flying</option>
      <option value="poison">Poison</option>
      <option value="ground">Ground</option>
      <option value="bug">Bug</option>
      <option value="ghost">Ghost</option>
      <option value="fire">Fire</option>
      <option value="water">Water</option>
      <option value="grass">Grass</option>
      <option value="electric">Electric</option>
      <option value="psychic">Psychic</option>
      <option value="ice">Ice</option>
      <option value="dragon">Dragon</option>
      <option value="dark">Dark</option>
      <option value="Fairy">Fairy</option>
      <option value="Unknown">Unknown</option>
      <option value="Developer">Developer</option>
    </select>
    <select {...register("typeTwo")} defaultValue="">
      <option value="" disabled >Second Type</option>
      <option value="normal">Normal</option>
      <option value="fighting">Fighting</option>
      <option value="flying">Flying</option>
      <option value="poison">Poison</option>
      <option value="ground">Ground</option>
      <option value="bug">Bug</option>
      <option value="ghost">Ghost</option>
      <option value="fire">Fire</option>
      <option value="water">Water</option>
      <option value="grass">Grass</option>
      <option value="electric">Electric</option>
      <option value="psychic">Psychic</option>
      <option value="ice">Ice</option>
      <option value="dragon">Dragon</option>
      <option value="dark">Dark</option>
      <option value="Fairy">Fairy</option>
      <option value="Unknown">Unknown</option>
      <option value="Developer">Developer</option>
    </select>
    <button type="submit">Agregar Pokemon</button>
  </form>
  </section>
 


  );

};

export default New;
