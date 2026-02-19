import { useState } from 'react';
import useCharacterLimit from './hooks/useCharacterLimit';
import CharacterDisplay from './components/CharacterDisplay';
import './App.css';

function App() {
  const MAX_LENGTH = 50;
  const [text, setText] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  useCharacterLimit(text, MAX_LENGTH, setShowWarning);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_LENGTH) {
      setText(value);
    }
  };

  const totalChars = text.length;
  const remainingChars = MAX_LENGTH - totalChars;

  return (
    <div className="app">
      <h1>Live Character Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your message here..."
        rows="5"
        maxLength={MAX_LENGTH}
      />
      <CharacterDisplay
        totalChars={totalChars}
        remainingChars={remainingChars}
        showWarning={showWarning}
      />
    </div>
  );
}

export default App;
