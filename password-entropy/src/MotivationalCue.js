import React from "react";

class MotivationalCue extends React.Component {

    message() {
        const entropy = this.props.entropy;

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