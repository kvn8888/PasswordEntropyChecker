import React from "react";
import EntropyCalculator from "./EntropyCalculator";
import './ToolsLayout.css';
import TimeToBruteForce from "./TimeToBruteForce";
import PasswordValidator from "./PasswordValidator";

class Tools extends React.Component {
    render() {
        const { entropy, strength, length, password } = this.props;
        return (
            <div className="ToolsLayout">
                <EntropyCalculator password_length={length} unique_characters={strength} entropy={entropy}/>
                <PasswordValidator length={length} password={password}/>
                <TimeToBruteForce />
            </div>
        );
    }
}

export default Tools;
