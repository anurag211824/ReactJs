import { useState, useEffect } from 'react';

const PokemonInfo = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const API = "https://pokeapi.co/api/v2/pokemon?limit=50"; // Fetch only 50 Pokémon for this example
    const fetchPokemonList = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            const pokemonDataPromises = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
            const pokemonData = await Promise.all(pokemonDataPromises);
            setPokemonList(pokemonData);
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPokemonList();  
    }, []);

    if (loading) {
        return <p className="text-center text-lg">Loading Pokémon data...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Pokémon List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pokemonList.map(pokemon => (
                    <div key={pokemon.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                        <h2 className="text-xl font-semibold mb-2">{pokemon.name.toUpperCase()}</h2>
                        <img 
                            src={pokemon.sprites.front_default} 
                            alt={pokemon.name} 
                            className="w-24 h-24 mb-2"
                        />
                        <p className="text-gray-700">Height: {pokemon.height}</p>
                        <p className="text-gray-700">Weight: {pokemon.weight}</p>
                        <p className="text-gray-700">Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonInfo;
