import React from 'react';

const TempoTotal = (props) => {
  return (

    <p>
      <span className="tempoTotal">
        {props.tempo}<br />
      </span>
      Tempo Total
    </p>
  )
}

export default TempoTotal;