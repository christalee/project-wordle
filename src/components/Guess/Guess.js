import React from "react";

import { range } from "../../utils";
import { WORD_LENGTH } from '../../constants';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((num) => (
        <span className="cell" key={num}>
          {guess ? guess.text.split("")[num] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
