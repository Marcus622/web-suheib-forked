import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Pokodex() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState()


useEffect(() =>{
    async function getPokemonDetails(){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data)
        setPokemon(data);
    }
    

    getPokemonDetails();
},[]);

if (!pokemon) {
    return <p>Ich bin noch am Laden</p>
}
  return (
    <div>
        <img src={pokemon.sprites.front_default} width="500px"></img>
        <audio src={pokemon.cries.latest} controls></audio>

<button onClick={() => {new Audio(pokemon.cries.latest).play()}}></button>
        <h1>{pokemon.name}</h1>
        <h1>{pokemon.id}</h1>
        <h1>{pokemon.weight}</h1>     
    </div>
  );
}

export default Pokodex;
