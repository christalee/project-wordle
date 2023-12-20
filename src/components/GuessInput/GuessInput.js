import React from "react";
import { WORD_LENGTH } from "../../constants";

function GuessInput({
  previousGuesses,
  setPreviousGuesses,
  gameStatus,
  answer,
}) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPreviousGuesses([
      ...previousGuesses,
      { id: Math.random(), text: guess },
    ]);
    setGuess("");
  };

  const bannerVars = {
    lost: {
      divClass: "sad",
      message: (
        <p>
          Sorry, the answer is <strong>{answer}</strong>.
        </p>
      ),
    },
    won: {
      divClass: "happy",
      message: (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{previousGuesses.length} guesses</strong>.
        </p>
      ),
    },
  };

  return gameStatus === "" ? (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">
        {`Enter guess (${WORD_LENGTH} letters)`}:
      </label>
      <input
        id="guess-input"
        type="text"
        required
        pattern={`[A-Z]{${WORD_LENGTH},${WORD_LENGTH}}`}
        title={`${WORD_LENGTH} letters`}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  ) : (
    <div className={`${bannerVars[gameStatus].divClass} banner`}>
      {bannerVars[gameStatus].message}
    </div>
  );
}

export default GuessInput;
