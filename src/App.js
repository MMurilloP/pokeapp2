import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react'
import { pokemonsContext } from './context/pokemonsContext'


function App() {
  
  const [pokemons, setPokemons] = useState([])
  const setNewPokemon = (newPokemon) => setPokemons([newPokemon, ...pokemons])

  const pokemonsData = {
    pokemons,
    setNewPokemon
  }


  return (
    <div className="App">
        <pokemonsContext.Provider value={pokemonsData}>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
        </pokemonsContext.Provider>
    </div>
  );
}

export default App;
