import React from "react";
import EntropyCalculator from "./EntropyCalculator";
import './ToolsLayout.css';
import CompareToEncryption from "./CompareToEncryption";
import TimeToBruteForce from "./TimeToBruteForce";

class Tools extends React.Component {


    render() {
        return (
            <div className="ToolsLayout">
                <EntropyCalculator />
                <CompareToEncryption />
                <TimeToBruteForce />
            </div>
        );
    }
}

export default Tools;
