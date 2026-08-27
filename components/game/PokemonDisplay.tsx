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
            <h2 className="text-2xl font-bold mb-4 text-black">
                Who's that Pokémon?
            </h2>

            <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={250}
                height={250}
                className={`
                    animate-bounce-fade-in
                    transition-all
                    duration-200
                    drop-shadow-xl
                    ${revealed ? "brightness-100" 
                                : "brightness-0 scale-95"}
                `}
            />

        </div>
    );
}