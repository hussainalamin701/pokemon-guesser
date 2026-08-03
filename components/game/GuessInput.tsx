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
        <div className="flex items-center justify-center p-6">
            <input 
                type="text"
                placeholder="Enter guess here"
                value={guess}
                onChange={(event) => setGuess(event.target.value)} 
                className="p-2.5 m-5 "/>
            
            <button onClick={handleGuess} 
                    className="bg-blue-500 hover:bg-blue-400 p-2.5 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Guess
            </button>

        </div>
    )
}