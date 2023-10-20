import React from "react";

function PreviousGuesses({ previousGuesses }) {
  return (
    <div className="guess-results">
      {previousGuesses.map((guess) => (
        <p className="guess" key={guess.id}>{guess.text}</p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
