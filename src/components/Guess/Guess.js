import React from "react";

function Guess() {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(guess);
    setGuess('');
  };
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess (5 letters):</label>
        <input
          id="guess-input"
          type="text"
          pattern={'[A-Z]{5,5}'}
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default Guess;
