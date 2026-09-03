"use client";

import type { Pokemon } from "./types/pokemon";

import { useState, useEffect, KeyboardEvent } from "react";
import PokemonDisplay from "./PokemonDisplay";
import GuessInput from "./GuessInput";
import GameOver from "./GameOver";

export default function Game() {
    // State

    const [guess, setGuess] = useState("");
    const [guessEvent, setGuessEvent] = useState(false);

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const [score, setScore] = useState(0);
    const [scoreStreak, setScoreStreak] = useState(1);

    const [guessesRemaining, setGuessesRemaining] = useState(3);
    const hearts = Array(guessesRemaining).fill("❤️")
  
    const [feedback, setFeedback] = useState("");
    const [revealed, setRevealed] = useState(false);
    const [answerColor, setAnswerColor] = useState<"default" | "green" | "red">("default");

    const [gameOver, setGameOver] = useState(false);

    // Variables

    let currentStreak = 0;

    const borderColors = {
        default: "border-yellow-400",
        green: "border-green-400",
        red: "border-red-400",
    };
    
    const borderColor = borderColors[answerColor];

    // Functions
    const resetGame = () => {
        setGameOver(false);

        setGuess("");
        setFeedback("");
        setRevealed(false);
        setAnswerColor("default");

        setGuessesRemaining(3);
        setScoreStreak(1);
        setScore(0);

        fetchPokemon();
    }

    const fetchPokemon = async () => {
        try{
            setRevealed(false);
            const randomId = Math.floor(Math.random() * 251)+ 1;

            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );

        const data = await response.json();

        console.log(data);
        console.log(data.sprites.front_default);

        setPokemon(data);
        }
        catch (error){
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    const correctGuess = () =>{ 
        const nextStreak = scoreStreak + 1;
        const pointsFarmed = 100 * nextStreak;
        
        setFeedback("Correct");
        setAnswerColor("green");
        setRevealed(true);
        setScoreStreak(nextStreak);

        setScore((previousScore) => previousScore + pointsFarmed);  
        setGuess("");

        setTimeout(() => {

            fetchPokemon();
        
        }, 1100);
    }

    const incorrectGuess = () =>{
        const newGuessesRemaining = guessesRemaining - 1;
        setGuessesRemaining(newGuessesRemaining);
        
        if(newGuessesRemaining === 0){
            setRevealed(true);
            setGameOver(true);
        }
      
        setFeedback("Incorrect");
        setAnswerColor("red");
        setGuessEvent(true);
        setScoreStreak(1);
        setGuess("");

        setTimeout (() => {
            setGuessEvent(false);
        }, 450);
    }

    const handleGuess = () =>{

        if (guess.trim() === "") {
            setFeedback("Please enter a pokemon name.");
            return;
        }

        const userGuess = guess.trim().toLowerCase();
        const correctAnswer = pokemon?.name.trim().toLowerCase();

        if(userGuess === correctAnswer){
            correctGuess();

        } else{
            incorrectGuess();
        }
    }
    
    // Loading
    if(pokemon === null) {
        return <p>Loading... </p>
    }
    // UI
    return (
        <div className={`
        max-w-xl
        mx-auto
        mt-12
        rounded-3xl
        bg-white
        shadow-2xl
        border-4
        p-8
        transition-all
        duration-300
        ${borderColor}
                    `}>

                <div className="flex justify-between mb-6 text-xl font-extrabold p-2.5 rounded-lg">
                    <p>Score: {score}</p>
                    <p>Guesses : {hearts.join("")}</p>
                </div>

                <PokemonDisplay 
                                pokemon = {pokemon}
                                revealed = {revealed}/>
                
                {gameOver ? (
                        <GameOver
                            score={score}
                            restartGame={resetGame}
                        />
                    ) : (
                        <GuessInput
                            guess={guess}
                            setGuess={setGuess}
                            handleGuess={handleGuess}
                            guessEvent = {guessEvent}
                        />
                    )}


                <p className="text-center mt-6 font-semibold text-black font-extrabold text-xl">
                    {feedback}
                </p>

        </div>
    );
}