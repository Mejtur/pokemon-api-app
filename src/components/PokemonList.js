import React, { useEffect, useState } from "react";
import SinglePokemon from "./SinglePokemon";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNext(result.next);
          setPokemon(result.results);
          setPrevious(result.previous);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [url]);

  return (
    <div className="pokemon-container">
      <div className="btn-container">
        <button className="btn" onClick={() => setUrl(previous)}>
          Previous
        </button>
        <button className="btn" onClick={() => setUrl(next)}>
          Next
        </button>
      </div>
      <div className="pokemons">
        {pokemon.map((pokemon) => (
          <SinglePokemon
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
    </div>
  );
}
