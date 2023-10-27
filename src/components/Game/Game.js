import React from "react";

import { sample, range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("");

  React.useEffect(() => {
    if (previousGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
    if (
      previousGuesses.length > 0 &&
      previousGuesses[previousGuesses.length - 1].text === answer
    ) {
      setGameStatus("won");
    }
  }, [previousGuesses]);

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess guess={previousGuesses[num]} answer={answer} key={num} />
        ))}
      </div>
      <GuessInput
        previousGuesses={previousGuesses}
        setPreviousGuesses={setPreviousGuesses}
        gameStatus={gameStatus}
        answer={answer}
      />
    </>
  );
}

export default Game;
