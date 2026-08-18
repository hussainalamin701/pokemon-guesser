import Game from "./Game"

type GameOverProps = {
    score: number,
    restartGame: () => void;
}

export default function GameOver(
    {score, restartGame} : GameOverProps
) {
    return (
        <div className="flex items-center justify-center flex-col p-2 flex gap-3 mt-6">
            <button onClick={restartGame}
                    className="
                    bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3
                    rounded-xl shadow-lg transition-all active:scale-95">
                Play Again?
            </button>

            <p>⭐ : {score}</p>
        </div>
    )
}