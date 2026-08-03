"use client"
import { useState } from "react";
import { SetStateAction, Dispatch } from "react";

type GuessInputProps = {
    guess: string,
    setGuess: (value: string) => void;
};

export default function GuessInput({guess,setGuess}: GuessInputProps){
    const handleGuess = () =>{
        console.log(guess);
    }

    return(
        <div>
            <input 
                type="text"
                placeholder="Enter guess here"
                value={guess}
                onChange={(event) => setGuess(event.target.value)} />
            
            <button onClick={handleGuess}>Guess</button>

        </div>
    )
}