import React from "react";

const PokemonCard = ({ pokemonData }) => {
  const { name, base_experience, height, weight, types, abilities, sprites } = pokemonData;

  return (
    <div className="pokemon-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 capitalize">{name}</h2>
      <img
        src={sprites.front_default}
        alt={`${name} Sprite`}
        className="pokemon-image w-24 h-24 mb-6"
      />
      <div className="pokemon-details text-gray-700 text-sm space-y-2">
        <p><strong>Type:</strong> {types.map(type => type.type.name).join(", ")}</p>
        <p><strong>Base Experience:</strong> {base_experience}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Weight:</strong> {weight}</p>
        <p><strong>Abilities:</strong> {abilities.map(ability => ability.ability.name).join(", ")}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
