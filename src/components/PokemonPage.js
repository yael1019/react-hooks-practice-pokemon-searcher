import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  // SETTING STATE FOR THE POKEMON ARRAY
  const [pokemons, setPokemons] = useState([])
  // SETTING STATE FOR THE SEARCH
  const [search, setSearch] = useState('')
  // SETTING STATE FOR FORM 
  const [form, setForm] = useState({
    name: '',
    hp: '',
    spritesFront: '',
    spritesBack: ''
  })
  // FETCHING THE DATA FROM JSON
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(resp => resp.json())
      .then(data => setPokemons(data))
  }, [])
  // FUNCTION TO HANDLE FORM SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        hp: form.hp,
        sprites: {
          front: form.spritesFront,
          back: form.spritesBack
        }
      })
    })
      .then(resp => resp.json())
      .then(data => setPokemons([...pokemons, data]))
    setForm({
      name: '',
      hp: '',
      spritesFront: '',
      spritesBack: ''
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
      <br />
      <Search setSearch={setSearch} />
      <br />
      <PokemonCollection pokemons={pokemons} search={search} />
    </Container>
  );
}

export default PokemonPage;
