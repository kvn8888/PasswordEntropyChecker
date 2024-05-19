import React from "react";
import './Tools.css'
// import 'DevUI.css'

class PasswordValidator extends React.Component {

    //TODO: Add the ability to see character combinations contributing to score
    //TODO: Add the ability to customize special symbol count
    //TODO: Add css animation where digits pop out the left

    render() {
        return(
            <div className="Tool">
                <h3>{this.props.length} characters containing</h3>
                {/[a-z]/g.test(this.props.password) ? <p>Lower case</p> : <p className="not_present">Lower case</p>}
                {/[A-Z]/g.test(this.props.password) ? <p>Upper case</p> : <p className="not_present">Upper case</p>}
                {/[0-9]/g.test(this.props.password) ? <p>Digits</p> : <p className="not_present">Digits</p> }
                {/[~!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',./]/g.test(this.props.password) ? <p>Symbols</p> : <p className="not_present">Symbols</p> }
            </div>
        );
    }
}

export default PasswordValidator;