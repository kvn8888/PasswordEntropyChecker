// import logo from './logo.svg';
import './App.css';
import TextField from './TextField.js';
import React, { Component } from "react";
import MotivationalCue from "./MotivationalCue";
import Tools from "./Tools";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        password: '',
        entropy: 0,
        strength: 0,
        length: 0
        }
    }

    //TODO: Add toggle for css
    //TODO: Add green for success

    PasswordStrength() {
        const password = this.state.password;
        let strength = 0;
        const length = password.length;

        const uppercase_regex = /[A-Z]/g;
        const lowercase_regex = /[a-z]/g;
        const digit_regex = /[0-9]/g;
        const special_char_regex = /[~!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',./]/g;

        if(uppercase_regex.test(password)) {strength += 26;}
        if(lowercase_regex.test(password)) {strength += 26;}
        if(digit_regex.test(password)) {strength += 10;}
        if(special_char_regex.test(password)) {strength += 32;}

        const entropy = length * this.log2(strength);
        const roundedEntropy = parseFloat(entropy.toFixed(3));

        this.setState({entropy: roundedEntropy});
        this.setState({strength: strength});
        this.setState({length: length});

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
            <h3 className="website-name">Password Entropy Checker</h3>
            <MotivationalCue entropy={this.state.entropy}></MotivationalCue>
            <TextField setPassword={this.setPassword}></TextField>
          </header>
            <Tools entropy={this.state.entropy} strength={this.state.strength} length={this.state.length} password={this.state.password}></Tools>
            <h5 className="disclaimer">Even through everything is local, enter in fake passwords</h5>
        </div>
      );
    }
}

export default App;
