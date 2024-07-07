import React from "react";
import './Tools.css';
// import './DevUI.css'

class TimeToBruteForce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'rtx 4090',
            hash_rate:8_460_000_000,
            customRate: ''
        };
    }

    setHardware = (tab) => {
        this.setState({activeTab: tab});
    }

    handleCustomChange = (event) => {
        const customRate = event.target.value;
        this.setState({
            hash_rate: customRate
        });
    }

    convertHashRate = (hashRate) => {
        if (hashRate >= 1e12) {
            return (hashRate/1e12).toFixed(2) + ' TH/s'
        } else if (hashRate>=1e9) {
            return (hashRate/1e9).toFixed(2) + ' GH/s'
        } else if (hashRate>=1e6) {
            return (hashRate/1e6).toFixed(2) + ' MH/s'
        } else {
            return hashRate + ' H/s';
        }
    }

    timeToBruteforce = () => {
        const totalCombinations = Math.pow(2, this.props.entropy);
        const secondsToCrack = totalCombinations / this.state.hash_rate;
        const daysToCrack = secondsToCrack / (60 * 60 * 24);
        if(daysToCrack > 30) {
            const monthsToCrack = daysToCrack/30.436875;
            if(monthsToCrack>12) {
                return (monthsToCrack/12).toFixed(2) + " years";
            }
            return monthsToCrack.toFixed(2) + " months";
        }
        if(daysToCrack >= 1) {
            return daysToCrack.toFixed(2) + " days";
        }
        return secondsToCrack.toFixed(2) + " seconds";
    }

    render() {
        return(
            // TODO: Tabs for GPU hardware and Amount of guesses a second
            <div className="Tool">
                <h3>Time To Bruteforce</h3>
                <div className="input-container">
                    <input
                        className="Count"
                        type="number"
                        placeholder="Custom Hash Rate"
                        onChange={this.handleCustomChange}
                        value={this.state.hash_rate}
                    />
                    <div className="tabs">
                        <button className={this.state.activeTab === "rtx 4090" ? 'active' : ''} onClick={() => {
                            this.setHardware('rtx 4090');
                            this.setState({hash_rate: 8_460_000_000})
                        }}>
                            RTX 4090
                        </button>

                        <button className={this.state.activeTab === "antminer s19 pro" ? 'active' : ''} onClick={() => {
                            this.setHardware('antminer s19 pro');
                            this.setState({hash_rate: 110_000_000_000_000})
                        }}>
                            s19 pro
                        </button>

                    </div>
                </div>
                <p className="hash-rate-display">{this.convertHashRate(this.state.hash_rate)}</p>
                <p>It would take {this.timeToBruteforce()} to brute force your password with a {this.state.activeTab}</p>
            </div>
        )
    }
}

export default TimeToBruteForce;