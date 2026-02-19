import { useTemperatureSync } from './hooks/useTemperatureSync';
import TemperatureInput from './components/TemperatureInput';
import './App.css';

function App() {
  const {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange
  } = useTemperatureSync();

  return (
    <div className="app">
      <div className="container">
        <h1>Temperature Converter</h1>
        <div className="converter-box">
          <TemperatureInput
            label="Celsius"
            value={celsius}
            onChange={handleCelsiusChange}
          />
          <TemperatureInput
            label="Fahrenheit"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
