// import React, { useState, useEffect } from 'react';

// const PokemonFetchApi= () => {
//     const [pokemonData, setPokemonData] = useState(null);
//     const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

//     useEffect(() => {
//         fetch(API)
//             .then(response => response.json())
//             .then(data => setPokemonData(data))
//             .catch(error => console.error("Error fetching Pokémon data:", error));
//     }, []);

//     if (!pokemonData) {
//         return <p>Loading Pokémon data...</p>;
//     }
//     return (
//         <div>
//             <h1>{pokemonData.name.toUpperCase()}</h1>
//             <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
//             <p>Height: {pokemonData.height}</p>
//             <p>Weight: {pokemonData.weight}</p>
//         </div>
//     );
// };

// export default PokemonFetchApi;
import React from 'react';

const PokemonCard = ({ pokemon }) => {
  // Extract the 5 key properties from the pokemon data
  const { 
    id, 
    name, 
    height, 
    weight, 
    types, 
    sprites 
  } = pokemon;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto text-center">
      {/* Display Pokémon Name */}
      <h2 className="text-2xl font-bold capitalize mb-2">{name}</h2>
      
      {/* Display Pokémon Image */}
      <img 
        src={sprites.front_default} 
        alt={`${name} sprite`} 
        className="w-24 h-24 mx-auto mb-4"
      />
      
      {/* Display ID */}
      <p className="text-gray-600"><strong>ID:</strong> {id}</p>
      
      {/* Display Height */}
      <p className="text-gray-600"><strong>Height:</strong> {height}</p>
      
      {/* Display Weight */}
      <p className="text-gray-600"><strong>Weight:</strong> {weight}</p>
      
      {/* Display Types */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold mb-1">Types:</h4>
        <ul className="flex justify-center space-x-4">
          {types.map((typeObj, index) => (
            <li 
              key={index} 
              className="capitalize bg-green-100 text-green-600 px-2 py-1 rounded-full"
            >
              {typeObj.type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
