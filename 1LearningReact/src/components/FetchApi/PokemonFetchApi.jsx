import React, { useState, useEffect } from 'react';

const PokemonFetchApi= () => {
    const [pokemonData, setPokemonData] = useState(null);
    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setPokemonData(data))
            .catch(error => console.error("Error fetching Pokémon data:", error));
    }, []);

    if (!pokemonData) {
        return <p>Loading Pokémon data...</p>;
    }
    return (
        <div>
            <h1>{pokemonData.name.toUpperCase()}</h1>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
        </div>
    );
};

export default PokemonFetchApi;
