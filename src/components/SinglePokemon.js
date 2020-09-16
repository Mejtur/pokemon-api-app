import React from "react";
import { Link } from "react-router-dom";

export default function SinglePokemon({ name, url }) {
  const pokemonIndex = url.split("/")[url.split("/").length - 2];
  const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;
  const routePath = `/pokemon/${pokemonIndex}`;

  return (
    <div className="pokemon">
      <img src={imgUrl} alt="pokemon" width="150px" height="150px" />
      <div className="pokemon-info">
        {pokemonIndex.length === 1 ? (
          <p className="index">#00{pokemonIndex}</p>
        ) : pokemonIndex.length === 2 ? (
          <p className="index">#0{pokemonIndex}</p>
        ) : (
          <p className="index"> #{pokemonIndex} </p>
        )}
        <p className="name">
          <Link to={routePath}>{name}</Link>
        </p>
      </div>
    </div>
  );
}
