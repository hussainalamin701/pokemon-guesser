import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-6">
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

            <button
                className="rounded-md border px-4 py-2 transition hover:bg-gray-100"
            >
                Toggle Theme
            </button>
        </header>
    );
}