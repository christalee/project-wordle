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
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess guess={previousGuesses[num]} key={num} />
        ))}
      </div>
      <GuessInput
        previousGuesses={previousGuesses}
        setPreviousGuesses={setPreviousGuesses}
      />
    </>
  );
}

export default Game;
