import React from "react";
import './Tools.css'

class PasswordValidator extends React.Component {
    render() {
        const { length, strength, password } = this.props;

        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasDigits = /[0-9]/.test(password);
        const hasSymbols = /[~!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',./]/g.test(password);

        return (
            <div className="Tool">
                <h3>{length} characters containing</h3>
                <div className="list">
                    <div className='item'>
                        <p className={hasLowercase ? 'present' : 'not_present'}>
                            <span className="text">Lower case</span> {hasLowercase && <span className="bonus">+26</span>}
                        </p>
                    </div>
                    <div className='item'>
                        <p className={hasUppercase ? 'present' : 'not_present'}>
                            <span className="text">Upper case</span> {hasUppercase && <span className="bonus">+26</span>}
                        </p>
                    </div>
                    <div className='item'>
                        <p className={hasDigits ? 'present' : 'not_present'}>
                            <span className="text">Digits</span> {hasDigits && <span className="bonus">+10</span>}
                        </p>
                    </div>
                    <div className='item'>
                        <p className={hasSymbols ? 'present' : 'not_present'}>
                            <span className="text">Symbols</span> {hasSymbols && <span className="bonus">+32</span>}
                        </p>
                    </div>
                    <p className="unique-character-count">{strength} unique combinations</p>
                </div>
            </div>
        );
    }
}

export default PasswordValidator;
