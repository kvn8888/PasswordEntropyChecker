import React from "react";

class MotivationalCue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entropy: 0
        };
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.password !== prevProps.password) {
            this.PasswordStrength();
        }
    }


    PasswordStrength() {
        let strength = 0;
        let message;
        const password = this.props.password;
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

    message() {
        const entropy = this.state.entropy;

        if (entropy <= 40) {return <h1>Yikes! That's a <italic>very</italic> bad password</h1>}
        else if (entropy <= 80) {return <h1>It would take a few seconds to crack your password</h1>}
        else if (entropy <= 128) {return <h1>Consider making it longer</h1>}
        else if (entropy <= 200) {return <h1>You're getting there!</h1>}
        else if (entropy <= 255) {return <h1>Great job!</h1>}
        else if (entropy <= 512) {return <h1>You're almost unhackable!</h1>}
        else if (entropy > 512) {return <h1>That's overkill</h1>}
    }

    render() {
        return (
            <div>
                {this.message()}
            </div>
        )
    }
}

export default MotivationalCue;