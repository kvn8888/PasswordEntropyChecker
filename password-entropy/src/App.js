// import logo from './logo.svg';
import './App.css';
import TextField from './TextField.js';
import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        password: ''
        }
    }

    setPassword = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h3>Password Entropy Checker</h3>
            <h5>Even through no data is saved, enter in fake passwords</h5>
            <TextField setPassword={this.setPassword}>

            </TextField>
            <button>
              Check Password
            </button>
          </header>
        </div>
      );
    }
}

export default App;
