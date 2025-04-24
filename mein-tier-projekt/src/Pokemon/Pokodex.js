import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './Pokodex.css';



function Pokodex() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate();


    useEffect(() => {
        async function getPokemonDetails() {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            setPokemon(data);
        }


        getPokemonDetails();
    }, []);

    if (!pokemon) {
        return <p>Ich bin noch am Laden</p>
    }
    return (
        <div className='pokodex-container'>
            <img
                className='pokodex-image'
                src={pokemon.sprites.other["official-artwork"].front_default}
                width="250px"
                alt={pokemon.name}
            />


            <audio className="pokodex-audio" src={pokemon.cries.latest} controls></audio>
            <button onClick={() => new Audio(pokemon.cries.latest).play()}>
                🔊 Ruf abspielen
            </button>

            <h1 className='pokodex-name'>{pokemon.name.toUpperCase()}</h1>

            <div className='pokodex-details'>
                <p><strong>ID:</strong> {pokemon.id}</p>
                <p><strong>Größe:</strong> {pokemon.height / 10} m</p>
                <p><strong>Gewicht:</strong> {pokemon.weight / 10} kg</p>
                <p><strong>Basis:</strong> {pokemon.base_experience}</p>
            </div>


            <h3>Typen:</h3>
            <ul className='pokodex-list'>
                {pokemon.types.map((t, index) => (
                    <li key={index}>{t.type.name}</li>
                ))}
            </ul>

            <h3>Fähigkeiten</h3>
            <ul className="pokodex-list">
                {pokemon.abilities.map((a, index) => (
                    <li key={index}>
                        {a.ability.name} {a.is_hidden ? "(versteckt)" : ""}
                    </li>
                ))}
            </ul>

            <h3>Statuswerte:</h3>
            <ul className="pokodex-list">
                {pokemon.stats.map((s, index) => (
                    <li key={index}>
                        {s.stat.name}: {s.base_stat}
                    </li>
                ))}
            </ul>
            <Link to="/pokemon">
            <button className='pokodex-back-button'>
            
            ⬅️ Zurück
            </button>
            </Link>
        </div>
    );
}

export default Pokodex;
