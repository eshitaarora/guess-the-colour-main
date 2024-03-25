// App.jsx
import React, { useState } from 'react';
import './App.css';

const colors = ["red", "green", "blue", "yellow", "orange", "purple"]; // List of colors to choose from

function App() {
  const [currentColor, setCurrentColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [selectedColor, setSelectedColor] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (color === currentColor) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }
  };

  const resetGame = () => {
    setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
    setSelectedColor('');
    setFeedback('');
  };

  return (
    <div className="App">
      <h1>Guess the Color ;)</h1>
      <div className="color-box" style={{ backgroundColor: currentColor }}></div>
      <div className="options">
        {colors.map((color, index) => (
          <button key={index} onClick={() => handleColorSelect(color)}>{color}</button>
        ))}
      </div>
      <div className={feedback ? (feedback === 'Correct!' ? 'correct_state' : 'incorrect_state') : 'default_state'}>
        {feedback}
      </div>
      {feedback && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
}

export default App;
