import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-center p-6 text-center mb-6">
            <div className="flex flex-col items-center w-full">
                <Image
                    src="/pokemonlogo.png"
                    alt="Silhouette Safari"
                    width={768}
                    height={86}
                    className="w-full max-w-md h-auto"
                    priority
                />

                <h1 className="mt-2 text-lg font-semibold text-blue-600">
                    Guess the Pokémon in 3 tries
                </h1>
            </div>
        </header>
    );
}