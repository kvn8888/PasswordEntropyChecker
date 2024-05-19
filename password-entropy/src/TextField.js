import React from 'react';
import './TextField.css';

class TextField extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
      inputType: 'password'
    }
  }

  handleChange = (event) => {
    this.props.setPassword(event);
  }

  toggleVisibility = () => {
    this.setState(prevState => ({inputType: prevState.inputType === 'password' ? 'text' : 'password'}));
  }

  render() 
  {
    return (
        <div className="InputField">
          <input type={this.state.inputType} className='text-field' onChange={this.handleChange} autoComplete="off" autoCapitalize="off" autoCorrect="off"/>
          <button className="ToggleVisibility" onClick={this.toggleVisibility}>
            {this.state.inputType === "password" ?
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="44" height="44"
                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round"
                     strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-closed" width="44"
                     height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round"
                     strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4"/>
                  <path d="M3 15l2.5 -3.8"/>
                  <path d="M21 14.976l-2.492 -3.776"/>
                  <path d="M9 17l.5 -4"/>
                  <path d="M15 17l-.5 -4"/>
                </svg>}
          </button>
        </div>
  )
  }
}

export default TextField;