"use client";

import type { Pokemon } from "./types/pokemon";

import { useState, useEffect } from "react";
import PokemonDisplay from "./PokemonDisplay";
import GuessInput from "./GuessInput";

export default function Game() {
    // State
    const [guess, setGuess] = useState("");
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    // Variables


    // Functions
    const fetchPokemon = async () => {
        
        const randomId = Math.floor(Math.random() * 151)+ 1;

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );

        const data = await response.json();

        console.log(data);
        console.log(data.sprites.front_defualt);

        setPokemon(data);
    }

    useEffect(() => {
        fetchPokemon();
    }, []);
    
    // Loading
    if(pokemon === null) {
        return <p>Loading... </p>
    }

    // UI
    return (
        <div>
            <PokemonDisplay pokemon = {pokemon}/>

            <GuessInput 
                guess = { guess }
                setGuess={ setGuess }
            />

            
        </div>
    );
}