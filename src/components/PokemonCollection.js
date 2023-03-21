import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, search }) {
// FILTER MY ARRAY ACCORDING TO SEARCH INPUT
  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
// MAPPING THROUGH POKEMONS ARRAY TO CREATE CARDS
  const mappedPokemons = filteredPokemons.map(pokemon => <PokemonCard key={ pokemon.id } pokemon={ pokemon } />)
  return (
    <Card.Group itemsPerRow={6}>
      { mappedPokemons }
    </Card.Group>
  );
}

export default PokemonCollection;
