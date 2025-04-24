import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css"


function Pokemonlist() {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
                const data = await res.json();

                const urlListe = data.results.map((el) => el.url);

                const promises = urlListe.map(async (url) => {
                    const res = await fetch(url);
                    return await res.json();
                });

                const fetchedPokemons = await Promise.all(promises);
                setPokemons((prev) => [...prev, ...fetchedPokemons]);

               
            } catch (error) {
                console.error("Fehler beim Laden der Pokemon:", error);
            }   finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [offset]);

    const loadMore = () => {
        setOffset((prevOffset) => prevOffset + 20);
    }



    return (
        <>
            <Link to="/.">🔙 Tiere</Link>
            <div className="containerList">
                {pokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        image={pokemon.sprites.front_default}
                        Name={pokemon.name}
                        Gewicht={pokemon.weight}
                        Größe={pokemon.height}
                        Typ={pokemon.types[0].type.name}
                    ></PokemonCard>
                ))}
            </div>
                <div style={{ textAlign: "center", margin: "20px" }}>
                    <button onClick={loadMore} disabled={loading}>
                        {loading ? "Lädt..." : "🔁 Mehr laden"}
                    </button>
                </div>
        </>
    );

}

export default Pokemonlist;