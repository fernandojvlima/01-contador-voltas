import React, { useState, useEffect } from "react";
import './styles.css';
import Mostravoltas from "./MostraVoltas";
import MostraTempo from "./MostraTempo";
import Button from "./Button";
import TempoTotal from "./TempoTotal";

function App() {
  const [numVoltas, setVoltas] = useState(0);
  const [running, setRunning] = useState(false);
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }
    return () => {
      if (timer) {
        timer = clearInterval(timer);
      }
    }
  }, [running])

  const toggleRunning = () => { setRunning(!running) }

  const aumenta = () => { setVoltas(numVoltas + 1) }

  const diminui = () => {
    if (numVoltas > 0) {
      setVoltas(numVoltas - 1)
    }
  }

  const reset = () => {
    setTempo(0);
    setVoltas(0);
  }

  return (
    <div className="App">
      <Mostravoltas voltas={numVoltas} />
      <Button text="+" className="bigger" onClick={aumenta} />
      <Button text="-" className="bigger" onClick={diminui} />
      {
        numVoltas > 0 &&
        <MostraTempo tempo={tempo / numVoltas} />
      }
      <TempoTotal tempo={tempo} />
      <Button onClick={toggleRunning} text={running ? 'Pausar' : 'Iniciar'} />
      <Button onClick={reset} text="Reiniciar" />
    </div>
  );
}

export default App;
