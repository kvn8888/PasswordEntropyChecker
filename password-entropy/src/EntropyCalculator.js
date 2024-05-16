import React from "react";
import './Tools.css';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

class EntropyCalculator extends React.Component {
    render() {
        const { password_length, unique_characters, entropy } = this.props;
        let inlineFormula = 'E=\\text{length}\\times\\log_{2}(\\text{unique characters})'

        if(password_length !== 0  && unique_characters !== 0) {
            inlineFormula = `${entropy}=${password_length}\\times\\log_{2}(${unique_characters})`;
        }

        return (
            <div className="Tool">
                <h3>Entropy Calculation</h3>
                <InlineMath math={inlineFormula}></InlineMath>
            </div>
        );
    }
}

export default EntropyCalculator;
