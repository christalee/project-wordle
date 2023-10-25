import React from "react";

import { range } from "../../utils";
import { WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const cssClasses = guess ? checkGuess(guess.text, answer) : [];

  return (
    <p className="guess">
      {range(WORD_LENGTH).map((num) => (
        <span className={`cell ${guess ? cssClasses[num].status : ''}`} key={num}>
          {guess ? guess.text.split("")[num] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
