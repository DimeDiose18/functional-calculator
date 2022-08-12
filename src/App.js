import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ButtonClear from "./components/ButtonClear";
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addValues = value => {
  setInput(input + value);
  };

  const result = () => {
    if(input){ 
     setInput(evaluate(input)); 
    } else {
      alert('Ingresa valores para realizar operaciones :)')
    }
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <Input input={input}/>
        <div className="row">
          <Button handleClick={addValues}>1</Button>
          <Button handleClick={addValues}>2</Button>
          <Button handleClick={addValues}>3</Button>
          <Button handleClick={addValues}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addValues}>4</Button>
          <Button handleClick={addValues}>5</Button>
          <Button handleClick={addValues}>6</Button>
          <Button handleClick={addValues}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addValues}>7</Button>
          <Button handleClick={addValues}>8</Button>
          <Button handleClick={addValues}>9</Button>
          <Button handleClick={addValues}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={result}>=</Button>
          <Button handleClick={addValues}>0</Button>
          <Button handleClick={addValues}>.</Button>
          <Button handleClick={addValues}>/</Button>
        </div>
        <div className="row">
          <ButtonClear handleClear={() => setInput('')}>
          Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
};

export default App;
