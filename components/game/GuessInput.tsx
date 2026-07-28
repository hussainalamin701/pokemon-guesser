"use client"
import { useState } from "react";

function handleGuess(){

}

export default function GuessInput(){
    const [guess, setPokemon] = useState("");
    return(
        <div>
            <input 
                type="text"
                placeholder="Enter guess here"
                value={guess}
                onChange={(event) => setPokemon(event.target.value)} />
            
            <button onClick={() => console.log(guess)}>Guess</button>

        </div>
    )
}