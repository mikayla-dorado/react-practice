// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js
import React, { useState } from 'react';
import CoffeeCostCalc from './CoffeeCostCalc';
import { Counter } from './Counter';
import { Form } from './Form';
import Slider from './Slider';

function App() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (value) => {
    setSliderValue(value)
  }

  return (
    <div className="App">
      {/* <CoffeeCostCalc /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      <p>Current Value: {sliderValue}</p>
      <Slider min={0} max={100} step={1} value={sliderValue} onChange={handleSliderChange} />
    </div>
  );
}

export default App;
