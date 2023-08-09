import { FC } from "react";

type ResultGameProps = {
  randomNumber: number;
  guess: number;
};

const ResultGame: FC<ResultGameProps> = ({ guess, randomNumber }) => {
  if (guess === randomNumber) {
    return <p id="result">¡Felicitaciones! ¡Adivinaste el número!</p>;
  } else if (guess < randomNumber && guess > 0 && guess < 101) {
    return <p id="result">Intenta con un número más alto.</p>;
  } else if (guess > randomNumber && guess > 0 && guess < 101) {
    return <p id="result">Intenta con un número más bajo.</p>;
  } else if (guess < 0 || guess > 101) {
    return <p id="result">Ingresa un numero entre 1 y 100</p>;
  }
};
export default ResultGame;
