"use client";

import type { Pokemon } from "./types/pokemon";

import { useState, useEffect } from "react";
import PokemonDisplay from "./PokemonDisplay";
import GuessInput from "./GuessInput";

export default function Game() {
    // State
    const [guess, setGuess] = useState("");
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const [score, setScore] = useState(0);
    const [guessesRemaining, setGuessesRemaining] = useState(3);
    const [feedback, setFeedback] = useState("");
    const [revealed, setRevealed] = useState(false);

    // Variables

    // Functions
    const fetchPokemon = async () => {
        setRevealed(false);
        const randomId = Math.floor(Math.random() * 151)+ 1;

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );

        const data = await response.json();

        console.log(data);
        console.log(data.sprites.front_default);

        setPokemon(data);
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    const handleGuess = () =>{
        if (guess.trim() === "") {
            setFeedback("Please enter a pokemon name.");
            return;
        }

        const userGuess = guess.trim().toLowerCase();
        const correctAnswer = pokemon?.name.trim().toLowerCase();

        if(userGuess === correctAnswer){
            setFeedback("correct");
            setRevealed(true);
            setScore((previousScore) => previousScore + 100);
            setGuess("");

            setTimeout(() => {

                fetchPokemon();
            
            }, 1100);

        } else{
            if(guessesRemaining === 0){
                return;
            }
            setGuessesRemaining((previousGuess) => previousGuess -1);

            setFeedback("incorrect");

            setGuess("");
        }
    }
    
    // Loading
    if(pokemon === null) {
        return <p>Loading... </p>
    }

    // UI
    return (
        <div className="
            max-w-xl
            mx-auto
            mt-12
            rounded-3xl
            bg-white
            shadow-2xl
            border-4
            border-yellow-400
            p-8
            transition-all
            duration-300">

                <div className="flex justify-between mb-6 text-xl font-bold bg-red-600 p-2.5 rounded-lg">
                    <p>Score: {score}</p>
                    <p>Guesses: {guessesRemaining}</p>
                </div>

                <PokemonDisplay 
                                pokemon = {pokemon}
                                revealed = {revealed}/>
                <GuessInput 
                    guess = { guess }
                    setGuess={ setGuess }
                    handleGuess={ handleGuess }
                />

                <p className="text-center mt-6 font-semibold">
                    {feedback}
                </p>

        </div>
    );
}