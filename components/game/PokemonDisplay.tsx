import Image from "next/image";
import { Pokemon } from "./types/pokemon";

type PokemonDisplayProps = {
    pokemon: Pokemon;
};

export default function PokemonDisplay({pokemon}: PokemonDisplayProps) {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">
                Who's that Pokémon?
            </h2>

            <Image 
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={250}
                height={250}
            />

            <p className="mt-4 text-xl">
                {pokemon.name}
            </p>

        </div>
    );
}