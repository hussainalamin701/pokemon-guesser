"use client"
import { useState } from "react";
import { SetStateAction, Dispatch } from "react";

type GuessInputProps = {
    guess: string;
    setGuess: Dispatch<SetStateAction<string>>;
    handleGuess: () => void;
};

export default function GuessInput({
        guess,
        setGuess,
        handleGuess,
    }: GuessInputProps){

    return(
        <div className="flex items-center justify-center flex-col p-2 flex gap-3 mt-6">
            <input 
                type="text"
                placeholder="Enter guess here"
                value={guess}
                onChange={(event) => setGuess(event.target.value)} 
                className="flex-1
                            rounded-xl border-2 border-blue-300 px-4 py-3
                            text-lg focus:outline-none focus:ring-4
                            focus:ring-blue-300 transition-all m-5 text-black"
                            />
            <button onClick={handleGuess} 
                    className="bg-red-500 hover:bg-gray-400 p-2.5 text-white 
                                font-bold py-2 px-4 border-b-4 border-red-700 
                                hover:border-red-500 rounded rounded-xl
                                bg-blue-500 text-white font-bold
                                px-6 py-3 hover:bg-blue-600 active:scale-95
                                transition-all duration-200 shadow-lg">
                                Guess
            </button>

        </div>
    )
}