import Image from "next/image";
import { Pokemon } from "./types/pokemon";

type PokemonDisplayProps = {
    pokemon: Pokemon;
    revealed: boolean;
};

export default function PokemonDisplay({pokemon, revealed}: PokemonDisplayProps) {
    return (
        <div className="flex flex-col items-center
                        justify-center
                        items-center
                        bg-slate-100
                        rounded-2xl
                        p-6
                        shadow-inner
                        mb-6">
            <h2 className="text-2xl font-bold mb-4">
                Who's that Pokémon?
            </h2>

            <Image 
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={250}
                height={250}
                className={revealed? "" : "brightness-0"}
            />

        </div>
    );
}