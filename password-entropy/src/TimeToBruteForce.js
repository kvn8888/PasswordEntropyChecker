import React from "react";
import './Tools.css';
// import './DevUI.css'

class TimeToBruteForce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            activeTab: 'rtx 4090',
            hash_rate:8_460_000_000
        };
    }

    setHardware = (tab) => {
        this.setState({activeTab: tab});
    }

    default_tabs() {
        const { entropy } = this.props;

        return(
            <div>

            </div>
        )
    }

    render() {
        return(
            // TODO: Tabs for GPU hardware and Amount of guesses a second
            <div className="Tool">
                <h3>Time To Bruteforce</h3>
                <div className="input-container">
                    <input className="Count" type="number" placeholder="Count" onChange={event => {
                        this.setState({count: event.target.value})
                    }}/>
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
                            antminer s19 pro
                        </button>
                        <button className={this.state.activeTab === "custom" ? 'active' : ''} onClick={() => {
                            this.setHardware('custom')
                        }}>Custom
                        </button>
                    </div>
                    <div className="tab-content">
                        {this.state.setHardware === 'rtx 4090' && <div>{this.default_tabs()}</div>}
                        {this.state.setHardware === 'antminer s19 pro' && <div>{this.default_tabs()}</div>}
                        {this.state.setHardware === 'custom' && <div><label>
                            <input className="CustomEntropy" type="number" onChange={(event) => {
                                this.setState({entropy_specification: event.target.value})
                            }}/>
                        </label>{this.default_tabs()}</div>}
                    </div>
                </div>
                {/*<p></p>*/}
            </div>
        )
    }
}

export default TimeToBruteForce;