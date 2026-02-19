import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [focusCount, setFocusCount] = useState(0);
  
  const inputRef = useRef(null);
  const messageHistoryRef = useRef([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleFocus = () => {
    setFocusCount(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      setMessages(prev => [...prev, currentMessage]);
      messageHistoryRef.current.push(currentMessage);
      setCurrentMessage('');
    }
  };

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="app">
      <h1>Focus Tracker & Message History</h1>
      
      <form onSubmit={handleSubmit} className="input-form">
        <input
          ref={inputRef}
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onFocus={handleFocus}
          placeholder="type message..."
          className="message-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" onClick={handleFocusInput} className="focus-btn">
          Focus Input
        </button>
      </form>

      <p className="focus-count">Focus count: {focusCount}</p>

      <div className="messages-section">
        <h2>Messages:</h2>
        <ul className="message-list">
          {messages.map((msg, index) => (
            <li key={index}>- {msg}</li>
          ))}
        </ul>
      </div>

      <div className="history-section">
        <p>
          <strong>History in Ref (no re-render):</strong>{' '}
          {messageHistoryRef.current.join(', ')}
        </p>
      </div>
    </div>
  );
}

export default App;
