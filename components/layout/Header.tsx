import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-around p-6 text-4xl
                            font-extrabold
                            text-center
                            text-blue-600
                            drop-shadow-sm
                            mb-6">
            <div className="flex flex-col">
                <Image
                    src="/pokemonlogo.png"
                    alt="Pokemon Guesser Logo"
                    width={250}
                    height={100}
                    priority
                />

                <h1 className="mt-2 text-lg font-semibold">
                    Guess the Pokémon in 3 tries
                </h1>
            </div>
        </header>
    );
}