import { useState, useEffect } from 'react';

export const useTemperatureSync = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [lastChanged, setLastChanged] = useState(null);

  useEffect(() => {
    if (lastChanged === 'celsius' && celsius !== '') {
      const f = (parseFloat(celsius) * 9/5 + 32).toFixed(2);
      setFahrenheit(f);
    } else if (lastChanged === 'fahrenheit' && fahrenheit !== '') {
      const c = ((parseFloat(fahrenheit) - 32) * 5/9).toFixed(2);
      setCelsius(c);
    }
  }, [celsius, fahrenheit, lastChanged]);

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    setLastChanged('celsius');
    if (value === '') {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    setLastChanged('fahrenheit');
    if (value === '') {
      setCelsius('');
    }
  };

  return {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange
  };
};
