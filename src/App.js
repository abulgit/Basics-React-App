import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [bmiStatus, setBMIStatus] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
      setBMI(bmiValue);
      determineBMIStatus(bmiValue);
    } else {
      alert('Please enter weight and height values.');
    }
  };

  const determineBMIStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBMIStatus('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBMIStatus('Normal weight');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBMIStatus('Overweight');
    } else {
      setBMIStatus('Obesity');
    }
  };
  

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <div className="result">Your BMI: {bmi}</div>}
      {bmiStatus && <div className="status">Status: {bmiStatus}</div>}
    </div>
  );
}

export default App;
