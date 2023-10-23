import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import PreviousGuesses from "../PreviousGuesses";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  return (
    <>
      <PreviousGuesses previousGuesses={previousGuesses} />
      <GuessInput
        previousGuesses={previousGuesses}
        setPreviousGuesses={setPreviousGuesses}
      />
    </>
  );
}

export default Game;
