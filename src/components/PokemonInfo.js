import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PokemonInfo({ match }) {
  const url = `https://pokeapi.co/api/v2${match.url}`;
  const pokemonIndex = url.split("/")[url.split("/").length - 1];
  const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;

  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPokemon(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="pokemonInfo__container">
      {isLoaded ? (
        <div>
          <img src={imgUrl} alt="img" />
          <p>Name: {pokemon.name}</p>
          <p>Height: {pokemon.height} cm</p>
          <p>Weight: {pokemon.weight} kg</p>
          <Link to="/" className="link">
            Back to home
          </Link>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
