import logo from './logo.svg';
import './App.css';
import TextField from './TextField.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Password Entropy Checker</h3>
        <h5>Even through no data is saved, enter in fake passwords</h5>
        <TextField>

        </TextField>
        <button>
          Check Password
        </button>
      </header>
    </div>
  );
}

export default App;
