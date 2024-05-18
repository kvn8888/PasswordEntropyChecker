import React from "react";
import './Tools.css'
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

class CompareToEncryption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'AES-128',
            entropy_specification: 128
        }
    }

    setActiveTab = (tab) => {
        this.setState({activeTab: tab});
    }

    default_tabs() {
        const { entropy } = this.props;
        const { entropy_specification } = this.state;
        const comparisonValue = 2 ** (entropy - entropy_specification);

        // Convert the comparison value to scientific notation
        const comparisonValueExponential = comparisonValue.toExponential(3);
        const [mantissa, exponent] = comparisonValueExponential.split('e');

        const latexExpression = `\\frac{2^{${entropy.toFixed(3)}}}{2^{${entropy_specification}}} = ${mantissa} \\times 10^{${exponent}}`;

        return(
            <div>
                <p>
                    Your password is <InlineMath math={latexExpression} /> times stronger than {this.state.activeTab}
                </p>
            </div>
        )
    }

    render() {
        return(
            <div className="Tool">
                <h3>Compare to</h3>
                <div className="tabs">
                    <button className={this.state.activeTab === "AES-128" ? 'active' : ''} onClick={() => {this.setActiveTab('AES-128'); this.setState({entropy_specification: 128})}}>AES 128</button>
                    <button className={this.state.activeTab === "AES-256" ? 'active' : ''} onClick={() => {this.setActiveTab('AES-256'); this.setState({entropy_specification: 256})}}>AES 256</button>
                    <button className={this.state.activeTab === "tab3" ? 'active' : ''} onClick={() => {this.setActiveTab('tab3')}}>Custom</button>
                </div>
                <div className="tab-content">
                    {this.state.activeTab === 'AES-128' && <div>{this.default_tabs()}</div>}
                    {this.state.activeTab === 'AES-256' && <div>{this.default_tabs()}</div>}
                    {this.state.activeTab === 'tab3' && <div>Custom</div>}
                </div>
            </div>
        )
    }
}

export default CompareToEncryption;