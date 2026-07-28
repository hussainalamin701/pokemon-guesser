type PokemonDisplayProps = {
    pokemon: string;
}

export default function PokemonDisplay({
    pokemon,
}: PokemonDisplayProps) {
    return(
        <div>
            <p>{pokemon}</p>
        </div>
    );
}