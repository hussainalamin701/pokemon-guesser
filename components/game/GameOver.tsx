import Game from "./Game"

type GameOverProps = {
    score: number,
    resetGame: () => void;
}

export default function GameOver(
    {score, resetGame} : GameOverProps
) {
    return (
        <div>
            <button onClick={resetGame}>
                Play Again?
            </button>
        </div>
    )
}