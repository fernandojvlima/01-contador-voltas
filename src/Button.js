import React from 'react';

const Button = (props) => {
  return (

    <button className="button" {...props}>{props.text}</button>

  )
}

export default Button;