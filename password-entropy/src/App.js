// import logo from './logo.svg';
import './App.css';
import TextField from './TextField.js';
import React, { Component } from "react";
import MotivationalCue from "./MotivationalCue";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        password: '',
        entropy: 0
        }
    }

    PasswordStrength() {
        let strength = 0;
        let message;
        const password = this.state.password;
        const length = password.length;

        const uppercase_regex = /[A-Z]/g;
        const lowercase_regex = /[a-z]/g;
        const digit_regex = /[0-9]/g;
        const special_char_regex = /[~!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',./]/g;

        if(uppercase_regex.test(password)) {strength += 26;}
        if(lowercase_regex.test(password)) {strength += 26;}
        if(digit_regex.test(password)) {strength += 10;}
        if(special_char_regex.test(password)) {strength += 34;}

        const entropy = length * this.log2(strength);
        this.setState({entropy: entropy});

    }

    log2(value) {
        return Math.log(value) / Math.log(2);
    }

    setPassword = (event) => {
        this.setState({password: event.target.value}, () => {this.PasswordStrength(event.target.value)});
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h3>Password Entropy Checker</h3>
            <h5>Even through no data is saved, enter in fake passwords</h5>
            <MotivationalCue password={this.state.password} entropy={this.state.entropy}></MotivationalCue>
            <TextField setPassword={this.setPassword}></TextField>
          </header>
        </div>
      );
    }
}

export default App;
