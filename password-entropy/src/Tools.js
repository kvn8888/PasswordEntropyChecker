import React from "react";
import EntropyCalculator from "./EntropyCalculator";
import './ToolsLayout.css';

class Tools extends React.Component {
    render() {
        return (
            <div className="ToolsLayout">
                <EntropyCalculator />
                <EntropyCalculator />
                <EntropyCalculator />
            </div>
        );
    }
}

export default Tools;
