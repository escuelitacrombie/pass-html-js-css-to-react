import { useState } from "react";
import ResultGame from "./ResultGame";

function App() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [attempts, setAttempts] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [gessValue, setGessValue] = useState("");

  const resetGame = () => {
    setAttempts(0);
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGessValue("");
    setInputValue("");
  };

  const checkGuess = () => {
    if (inputValue) {
      setGessValue(inputValue);
      setAttempts((prev) => prev + 1);
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Adivina el número</h1>
      <p>Estoy pensando en un número entre 1 y 100. ¡Adivina cuál es!</p>
      <input
        onChange={handleChangeInput}
        value={inputValue}
        type="number"
        id="guessInput"
        placeholder="Ingresa tu número"
      />
      <button onClick={checkGuess}>Adivinar</button>
      <button onClick={resetGame} id="reiniciar">
        Reiniciar
      </button>
      <ResultGame guess={Number(gessValue)} randomNumber={randomNumber} />
      <p id="intentos">Cantidad de intentos: {attempts}</p>
    </div>
  );
}

export default App;
