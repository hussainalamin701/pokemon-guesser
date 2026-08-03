import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-around p-6">
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

            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    
                <span>Toggle Theme</span>
            </button>
        </header>
    );
}