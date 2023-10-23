import React from "react";
import { WORD_LENGTH } from '../../constants';

function GuessInput({ previousGuesses, setPreviousGuesses }) {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setPreviousGuesses([...previousGuesses, {id: Math.random(), text: guess}]);
    setGuess("");
  };
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">{`Enter guess (${WORD_LENGTH} letters)`}:</label>
        <input
          id="guess-input"
          type="text"
          pattern={`[A-Z]{${WORD_LENGTH},${WORD_LENGTH}}`}
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessInput;
