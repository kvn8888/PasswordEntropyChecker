import React from 'react';
import './TextField.css';

class TextField extends React.Component 
{

  handleChange = (event) => {
    this.props.setPassword(event);
  }
  render() 
  {
    return (
      <input type="password" className='text-field' onChange={this.handleChange}/>
    )
  }
}

export default TextField;