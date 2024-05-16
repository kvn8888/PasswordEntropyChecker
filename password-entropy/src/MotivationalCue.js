import React from "react";

class MotivationalCue extends React.Component {

    message() {
        const entropy = this.props.entropy;

        if (entropy <= 40) {return <h1>Yikes! That's a <italic>very</italic> bad password</h1>}
        else if (entropy <= 50) {return <h1>It would take a few seconds to crack your password</h1>}
        else if (entropy <= 60) {return <h1>It would take a few minutes to crack your password</h1>}
        else if (entropy <= 70) {return <h1>It would take a few hours to crack your password</h1>}
        else if (entropy <= 80) {return <h1>It would take a few days to crack your password</h1>}
        else if (entropy <= 128) {return <h1>Consider making it longer</h1>}
        else if (entropy <= 200) {return <h1>Good job!</h1>}
        else if (entropy <= 255) {return <h1>Great job!</h1>}
        else if (entropy <= 512) {return <h1>You're almost unhackable!</h1>}
        else if (entropy <= 1048) {return <h1>You're quantum resistent!</h1>}
        else if (entropy > 1048) {return <h1>That's overkill</h1>}
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