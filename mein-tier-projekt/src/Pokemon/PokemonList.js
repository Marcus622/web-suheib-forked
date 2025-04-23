import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css"


function Pokemonlist() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=24");
                const data = await response.json();

                const detailedData = await Promise.all(
                    data.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
                );

                setPokemons(detailedData);
            } catch (error) {
                console.error("Fehler beim Laden der Pokemon:", error);
            }
        };
        fetchPokemons();
    }, []);



    return (
        <>
            <Link to="/.">Tiere</Link>
            <div className="containerList">
                {pokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        image={pokemon.sprites.front_default}
                        Name={pokemon.name}
                        Gewicht={pokemon.weight}
                        Größe={pokemon.height}
                        Typ={pokemon.types[0].type.name}
                    ></PokemonCard>
                ))}
            </div>

        </>
    );

}

export default Pokemonlist;