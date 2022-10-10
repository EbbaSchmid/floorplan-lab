import React from 'react'

const Bath = (props) => {
  return (
    <div className="Bath" id={`${props.size}-Bath`}>
      <h3>{props.size} Bath</h3>
    </div>
  );
}

export default Bath;