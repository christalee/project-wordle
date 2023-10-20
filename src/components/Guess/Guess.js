import React from "react";

function Guess({ previousGuesses, setPreviousGuesses }) {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setPreviousGuesses([...previousGuesses, {id: Math.random(), text: guess}]);
    setGuess("");
  };
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess (5 letters):</label>
        <input
          id="guess-input"
          type="text"
          pattern={"[A-Z]{5,5}"}
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default Guess;
