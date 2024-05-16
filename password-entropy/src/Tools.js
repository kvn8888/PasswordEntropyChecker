import React from "react";
import EntropyCalculator from "./EntropyCalculator";
import './ToolsLayout.css';
import CompareToEncryption from "./CompareToEncryption";
import TimeToBruteForce from "./TimeToBruteForce";

class Tools extends React.Component {
    render() {
        const { entropy, strength, length } = this.props;
        return (
            <div className="ToolsLayout">
                <EntropyCalculator password_length={length} unique_characters={strength} entropy={entropy}/>
                <CompareToEncryption />
                <TimeToBruteForce />
            </div>
        );
    }
}

export default Tools;
