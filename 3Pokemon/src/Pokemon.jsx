import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null)
  const [search,setSearch]=useState("")
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailedPokemonData = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
      const detailResponses = await Promise.all(detailedPokemonData);
      console.log(detailResponses);
      setPokemon(detailResponses);
      setLoading(false)
      setError(null)
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(error )
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  const SearchPokemonData=pokemon.filter((currPokemon)=>currPokemon.name.toLowerCase().includes(search.toLowerCase()))
if(loading){
  return (
    <div>
      <h1>
        loading.......
      </h1>
    </div>
  )
}
if(error){
  return (
    <div>
      <h1>
       {error.message}
      </h1>
    </div>
  )
}
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
        Let's Catch Pokémon
      </h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search Pokémon"
          className="w-72 p-3 border border-gray-300 rounded-lg shadow-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}

        />
      </div>
      <div className="p-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        { SearchPokemonData.map((currPokemon) => (
          <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
