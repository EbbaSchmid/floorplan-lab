import React from 'react'

const Bedroom = (props) => {
  return (
    <div className="Bedroom" id={`Bed-${props.bedNum}`}>
      <h3>Bedroom {props.bedNum}</h3>
    </div>
  );
}

export default Bedroom;